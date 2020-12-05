/**
 * 购物车js文件
 */
$(function () {
    /** 
    *1.点击表头的全选框，获取表头全选框的选中状态
    *2.表格中的单选框状态需要一致
    *3.结算中的全选状态要 一致
    */
//   定义三个变量
var $theadInput = $('table thead input[type=checkbox]');//头部选择框
var $tbodyInput = $('table tbody input[type=checkbox]');//身体选择框
var $allPriceInput = $('.totalPrice input[type=checkbox]');//结算选择器

$theadInput.change(function () {
    //获取选状态
    var state = $(this).prop('checked');
    //让表格中的选择框状态保持一致
    $tbodyInput.prop('checked', state);
    $allPriceInput.prop('checked', state);
    })
//结算中的选择框也需要相同的选择功能
$allPriceInput.change(function ()  {
    var state = $(this).prop('checked');
    $tbodyInput.prop('checked', state);
    $theadInput.prop('checked', state);
    })
    //表单中的选中状态 反过来影响全选
    $tbodyInput.change(function () {
        //定义一个标杆
        var flag = true;
        //总价
        var totalPrice = 0;
        //循环表格中所有选择框的状态
        $tbodyInput.each(function (i,input) {
            if(!$(input).prop('checked')){
                flag = false;
            }else{
                totalPrice += parseFloat( $(this).closest('tr').find('.subprice').text());
            }
        })
        $theadInput.prop('checked',flag)
        $allPriceInput.prop('checked',flag)
        //渲染到总价对应的位置
        $('.total').text(totalPrice.toFixed(2))
    })
    //数量的加和减功能
    $('.add').on('click',function(){
        //获取输入的值
        var oldVal = parseInt($(this).next().val());
        //自增
        oldVal++;
        //重新赋值个这个输入框
        $(this).next().val(oldVal)
        //小计
        var subtotal = oldVal * parseFloat($(this).closest('tr').find('.price').text());
        //把小结的结果dom放入对应的位置
        $(this).closest('tr').find('.subprice').text(subtotal.toFixed(2));
    })
    $('.reduce').on('click',function(){
        //获取输入的值
        var oldVal = parseInt($(this).prev().val());
        //自减
        oldVal--;

        if(oldVal<1){
            oldVal=1
        }
        oldVal = oldVal < 1 ? 1 : oldVal;
        //重新赋值个这个输入框
        $(this).prev().val(oldVal)
         //小计
         var subtotal = oldVal * parseFloat($(this).closest('tr').find('.price').text());
         //把小结的结果dom放入对应的位置
         $(this).closest('tr').find('.subprice').text(subtotal.toFixed(2));
    })
    //删除
    $('.del').click(function (){
        $(this).closest('tr').remove();
    })
    //计算总价
    $tbodyInput.each(function (i,input){
       
        //判断选中状态 如果被选中的 那么就需要计算总价
        if($(input).prop('checked')){
            totalPrice += parseFloat( $(this).closest('tr').find('.subprice').text());
        }
        //渲染到算总价的位置
    })
})