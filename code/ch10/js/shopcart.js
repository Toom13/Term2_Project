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

        //调用计算总价函数
        calcTotalPrice();
    })
    //结算中的选择框也需要相同的选择功能
    $allPriceInput.change(function () {
        var state = $(this).prop('checked');
        $tbodyInput.prop('checked', state);
        $theadInput.prop('checked', state);

        //调用计算总价函数
        calcTotalPrice();
    })
    //表单中的选中状态 反过来影响全选
    $tbodyInput.change(function () {
        //定义一个标杆
        var flag = true;
        //循环表格中所有选择框的状态
        $tbodyInput.each(function (i, input) {
            if (!$(input).prop('checked')) {
                flag = false;
            }
        })
        $theadInput.prop('checked', flag)
        $allPriceInput.prop('checked', flag)
        //调用计算总价函数
        calcTotalPrice();
    })
    //数量的加功能
    $('.add').on('click', function () {
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
        //调用计算总价函数
        calcTotalPrice();
    })
    //数量的减功能
    $('.reduce').on('click', function () {
        //获取输入的值
        var oldVal = parseInt($(this).prev().val());
        //自减
        oldVal--;

        if (oldVal < 1) {
            oldVal = 1
        }
        oldVal = oldVal < 1 ? 1 : oldVal;
        //重新赋值个这个输入框
        $(this).prev().val(oldVal)
        //小计
        var subtotal = oldVal * parseFloat($(this).closest('tr').find('.price').text());
        //把小结的结果dom放入对应的位置
        $(this).closest('tr').find('.subprice').text(subtotal.toFixed(2));
        //调用计算总价函数
        calcTotalPrice();
    })
    //删除
    $('.del').click(function () {
        $(this).closest('tr').remove();
        calcgoodsCount();//调用商品总数量
    })
    //计算总价
    $tbodyInput.each(function (i, input) {

        //判断选中状态 如果被选中的 那么就需要计算总价
        if ($(input).prop('checked')) {
            totalPrice += parseFloat($(this).closest('tr').find('.subprice').text());
        }
        //渲染到算总价的位置
    })
    //计算总价和选中数量的函数
    function calcTotalPrice() {
        //定义一个数量
        var count = 0;
        //定义变量保存总价格
        var totalPrice = 0;
        //循环表格中的所有选择框   如果是选中状态    那么计算总价
        $('table tbody input[type=checkbox]').each(function (i, input) {
            if ($(input).prop('checked')) {
                count++;
                //累加价格
                totalPrice += parseFloat($(input).closest('tr').find('.subprice').text())
            }
        })
        //把总价渲染到对应的位置
        $('.total').text(totalPrice.toFixed(2))
        //把数量渲染到对应的dom对象
        $('.count').text(count)
    }
    //全部商品
    
    function calcgoodsCount(){
    $('.goodsCount').text($('table tbody tr').length)
    }
    calcgoodsCount();//一进入界面 就自动调用一次
    
    //删除选中状态
    $('.deleteChecked').on('click',function(){
        //循环单选框  如果选中  点击删除(删除一行)
        $tbodyInput.each(function(i,input){
            if($(this).prop('checked')){
                $(this).closest('tr').remove();
            }
        })
        //计算总价
        calcTotalPrice();
        //计算商品数量
        calcgoodsCount();
    })
})