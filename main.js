const updateCount = (element) =>{
    // mengambil data-value dari dataset element
    let value = parseInt(element.dataset.value);
    let initialValue = 0;
    // menggunakan Math.ceil agar animasi dapat lebih smooth dan natural
    const increment = Math.ceil(value/500);

    const increaseCount = setInterval(() => {
        initialValue += increment;
        if(initialValue > value){
            element.textContent = `${value}+`;
            clearInterval(increaseCount);
            return; // menghentikan kerja fungsi (tidak mereturn nilai apapun)
        }
        // insert counting ke html sesuai elementnya
        element.textContent = `${initialValue}+`;
    }, 1);
};

// query all class numbers lalu menjadikannya array
const items = [...document.querySelectorAll('.numbers')];
items.forEach((item)=>{
    console.log(item);
    updateCount(item);
})