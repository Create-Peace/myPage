$(function() {
    $('#feedbackSubmit').click(function(e) {
          e.preventDefault();
        var compName = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        // console.log(compName);
        if (compName && email && message) {
            $.ajax({
                type: 'post',
                cache: false,
                url: 'change.php',
                data: { name: compName, email: email, message: message },
                // dataType: 'json',
                success: function() {
                    alert("谢谢您的赏识！");
                     $('#name').val("") ;
                    $('#email').val("");
                    $('#message').val("");
                },
                error: function() {
                    alert("希望您再提交一次！");
                }
            })
        } else {
            alert('内容不能为空！')
        }

    });

})
