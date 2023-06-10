const inp = document.getElementById("inp"),
aCount = document.getElementById("a_count"),
bpCount = document.getElementById("bp_count"),
bCount = document.getElementById("b_count"),
bmCount = document.getElementById("bm_count"),
cCount = document.getElementById("c_count"),
fCount = document.getElementById("f_count");

function handlesubmit(){
    let number = inp.value;
    let count;
    number = parseInt(number);
    if(number > 100) {
        alert("Maximum 100");
    }
    else if(number >= 90){
        count =  aCount.innerHTML;
        count = parseInt(count);
        aCount.innerHTML = count + 1;
    }
    else if(number >= 87){
        count =  bpCount.innerHTML;
        count = parseInt(count);
        bpCount.innerHTML = count + 1;
    }
    else if(number >= 84){
        count =  bCount.innerHTML;
        count = parseInt(count);
        bCount.innerHTML = count + 1;
    }
    else if(number >= 80){
        count =  bmCount.innerHTML;
        count = parseInt(count);
        bmCount.innerHTML = count + 1;
    }
    else if(number >= 70){
        count =  cCount.innerHTML;
        count = parseInt(count);
        cCount.innerHTML = count + 1;
    }
    else{
        count =  fCount.innerHTML;
        count = parseInt(count);
        fCount.innerHTML = count + 1;
    }
    inp.value = "";
}