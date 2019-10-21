function convert() 
{
//The input to be converted to the message is provided here

var input = "Zulwh d surjudp (lq Sbwkrq, MdydVfulsw ru Uxeb) wr srsxodwh dqg wkhq vruw d
udqgrpob glvwulexwhg olvw ri 1 ploolrq lqwhjhuv, hdfk lqwhjhu kdylqj d ydoxh >= 1 dqg <=
100 zlwkrxw xvlqj dqb exlowlq/hawhuqdo oleudub/ixqfwlrq iru vruwlqj.
Brxu surjudp vkrxog fduhixoob frqvlghu wkh lqsxw dqg frph xs zlwk wkh prvw hiilflhqw
vruwlqj vroxwlrq brx fdq wklqn ri. Surylgh wkh vsdfh dqg wlph frpsohalwb ri brxu dojrulwkp
";
/* The convertion logic is based on Ceaser-Cipher method. We retrieve the ASCII values of
the characters one be one from the string. As per formulae; m = c + d mod 26. However we 
are using ASCII values, we have to replace mod 26 by - 26. The decryption key from the
pattern is 23. Hence m = c + 23-26 => m = c - 23. However for the ASCII values;
a-c; the formulae returns non-alphabetic ASCII values. As an exception to these three alphabets; m = c + 23;
The ASCII value thus attained are to be converted back to characters */

for(var i=0; i<input.length; i++)
    {
        var asc_code = input.charCodeAt(i);
        var conv_code;

        //Conversion of alphabets (a-c)
        if((asc_code >= 65 && asc_code <= 67) || (asc_code >= 97 && asc_code <= 99))
        {
             conv_code = asc_code+23;
        }
//Conversion of rest of the alphabets

else if((asc_code >= 68 && asc_code <= 90) || (asc_code >= 100 && asc_code <= 122))
        {
            conv_code = asc_code-3;
        }
//Conversion of non alphabetic characters

else conv_code = asc_code;
//Output the message

                var message = String.fromCharCode(conv_code);
                document.write(message);
        }
    }

    convert();
