<script type="text/javascript">
    $(document).ready(function(){

    var replacements = [
    ["a", "ا"], ["A", "آ"], ["b", "ب"], ["B", ""], ["c", "چ"],
    ["C", "ث"], ["d", "د"], ["D", "ډ"], ["e", "ع"], ["E", "ږ"],
    ["f", "ف"], ["F", ""], ["g", "ګ"], ["G", "غ"], ["h", "ح"],
    ["H", "ځ"], ["i", "ي"], ["I", "ې"], ["j", "ج"], ["J", "ض"],
    ["k", "ک"], ["K", "خ"], ["l", "ل"], ["L", ""], ["m", "م"],
    ["M", ""], ["n", "ن"], ["N", "ڼ"], ["o", "ه"], ["O", "ۀ"],
    ["p", "پ"], ["P", "څ"], ["q", "ق"], ["Q", "ښ"], ["r", "ر"],
    ["R", "ړ"], ["s", "س"], ["S", "ص"], ["t", "ت"], ["T", "ټ"],
    ["u", "ئ"], ["U", "ۍ"], ["v", "ط"], ["V", "ظ"], ["w", "و"],
    ["W", "ؤ"], ["x", "ش"], ["X", "ژ"], ["y", "ے"], ["Y", "ی"],
    ["z", "ز"], ["Z", "ذ"], ["?", "؟"], [";", "؛"], ["0", "۰"],
    ["1", "۱"], ["2", "۲"], ["3", "۳"], ["4", "۴"], ["5", "۵"],
    ["6", "۶"], ["7", "۷"], ["8", "۸"], ["9", "۹"]
        ].map(function (c) {
            // Escape the special characters
            var escaped = c[0].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            
            // And then convert into regular expression
            c[0] = new RegExp(escaped, "g");
            return c;
        });

        $("#pashto").on("input", function(event) {
            var car = $(this).val();
            
            // Now, simply replace by regular expressions
            replacements.forEach(function (c) {
                car = car.replace(c[0], c[1]);
            });
            $(this).val(car);
        });

        $("#keyboard").click(function()
        {
            $(".keyboard").toggle();
        });

        $("#english").focus();

        $(".keyboard").draggable();

        //Hide Element in Start
        $("#pashto").hide();
        $("#roman").hide();
        $("#keyboard").hide();
        $(".keyboard").hide();

        $("#englishswitch").css("background","#799924");

        $("#pashtoswitch").click(function(){

            $(this).css("background","#799924");
            $("#englishswitch").css("background","#ffffff");
            $("#romanswitch").css("background","#ffffff");

            $("#english").hide();
            $("#english").val("");
            $("#roman").hide();
            $("#roman").val("");

            $("#pashto").show();
            $("#pashto").focus();

            $("#keyboard").show();


        });

        $("#englishswitch").click(function(){

            $(this).css("background","#799924");
            $("#pashtoswitch").css("background","#ffffff");
            $("#romanswitch").css("background","#ffffff");

            $("#pashto").hide();
            $("#pashto").val("");
            $("#roman").hide();
            $("#roman").val("");

            $("#english").show();
            $("#english").focus();

            $("#keyboard").hide();
        });

        $("#romanswitch").click(function(){
            
            $(this).css("background","#799924");
            $("#englishswitch").css("background","#ffffff");
            $("#pashtoswitch").css("background","#ffffff");

            $("#english").hide();
            $("#english").val("");
            $("#pashto").hide();
            $("#pashto").val("");

            $("#roman").show();
            $("#roman").focus();

            $("#keyboard").hide();
        });

        $("#english").autocomplete({ source: "get_list.php", minLength: 3});
        $("#pashto").autocomplete({ source: "get_pashto.php", minLength: 3});
        $("#roman").autocomplete({ source: "get_roman.php", minLength: 3});


    });
</script>