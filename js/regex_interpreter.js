document.addEventListener('DOMContentLoaded', function() {
    const regex_input = document.getElementById('regex_input');
    var regex = [];
    var divide = [];
    regex_input.addEventListener('keyup', (e) => {
        console.log(regex_input.value);
        regex = regex_input.value.split('');
        console.log(regex);
        hasRegexForm(regex);
        interpreting(regex);
        console.log(divide);
        // if (regex_input.value.trim() != '') {
        //     interpreting(regex);
        // }
    });


    function hasRegexForm(regex) {
        if (regex[0] == "\\" && regex[regex.length - 1] == "\\") {
            regex_input.classList.remove('invalid');
            regex_input.classList.add('valid');
        } else {
            regex_input.classList.remove('valid');
            regex_input.classList.add('invalid');
        }
    }


    function interpreting(regex) {
        let temp = [];
        for (let i = 0; i < regex.length; i++) {
            if (regex[i] == '(') {
                temp.push(regex[i]);
            } else if (regex[i] == ')') {
                temp.push(regex[i]);
                divide.push(temp);
                temp = [];
            }
        }
    }


});