function funftoc()
    {
    
        let v=parseFloat(txt1.value);
        lblans1.value=(v-32)*5/9;
        // if you want to print value in label then you write .innnerHTML and
        // if you have a tage then you write .value
    
    }

    function functof()
    {
    
        let c=parseFloat(txt1.value);
        lblans2.value=9/5*c+32;
    
    }