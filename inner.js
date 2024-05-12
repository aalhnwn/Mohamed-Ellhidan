window.addEventListener('load',function(){
let all_data =document.querySelectorAll('.all-data');
let data = document.querySelector('.data');
let data_audio = document.querySelector('.data_audio')
let serch_par = document.querySelector('.serch-par');
let clos = document.getElementById('clos');
let name = document.querySelector('.name');
let imgs = document.querySelector('.imgs');
let audios = document.getElementById('audios');
let icon_play = document.querySelector('.icon_play-vid');
let current = document.querySelector('#curren');
let dueri = document.querySelector('#dueri');
let hr2 = document.querySelector('#hr2');
let icon_num_15 = document.querySelector('.icon_num-15');
let icon_num15 = document.querySelector('.icon_num15');
let icon_index2 = document.querySelector('.icon_index2');
let icon_index1 = document.querySelector('.icon_index1');
let hr = document.querySelector('.hr');
let name_HTML = this.document.querySelector('.name-HTML');
let serch = document.getElementById('serch');
let icon_serch = document.querySelector('.icon-serch');
let numper = document.querySelectorAll('.numper');
let scrolls = this.document.querySelector('.scroll');
let scrollSvg = this.document.querySelector('.scroll div');
let swr_inner = this.document.getElementById('swr_inner');
let icon_clos = document.querySelector('.icon-clos');
let hr_icon = this.document.querySelector('.hr-icon')

data_audio.addEventListener('scroll',function(){
    if(data_audio.scrollTop >= 1271){
        scrolls.style.setProperty('--rr','black');
    }else{
        scrolls.style.setProperty('--rr','none');
    };
});

scrollSvg.addEventListener('click',function(){
    data_audio.scrollTo({
        top:0,
        behavior: "smooth"
    });
});

all_data[dataS.length-1].classList.add('data2');

icon_serch.addEventListener('click',function(){
    if(serch.placeholder=='ادخل اسم السورة'){
        serch.placeholder='ادخل رقم السورة';
    }else{
        serch.placeholder='ادخل اسم السورة';
    };
});



serch.addEventListener('focus',()=>{
    data_audio.scrollTo({
        top:191,
        left:0
    });
});
let arry = [];
document.addEventListener('keydown',function(event){
    if(event.key==='Enter'){
        if(serch.value !=''){
            if(document.activeElement === serch){
                if(serch.placeholder=='ادخل اسم السورة'){
                    for(let i = 0 ; i < dataS.length; i++){
                        if(dataS[i].name.includes(serch.value)){
                            arry.push(i);
                            all_data.forEach(function(all_data){
                                all_data.classList.remove('all-data1')
                            });
                        };
                    };
                }else{
                    if(serch.value-1<=114){
                        let num = serch.value-1;
                        arry.push(num);
                        all_data.forEach(function(all_data){
                            all_data.classList.remove('all-data1')
                        })
                    }else{}
                }
                let scrollData = all_data[arry[arry.length-1]].getBoundingClientRect();
                data_audio.scrollTo({
                    top:scrollData.top,
                    left:0,
                    behavior:"smooth"
                });
                all_data[arry[arry.length-1]].classList.add('all-data1');
            };
        }else{}
        serch.value='';
        serch.blur();
    };
});


data_audio.onscroll=function(){
    if(data_audio.scrollTop >= 191 ){
        name_HTML.classList.add('name-HTML1');
    }else{
        name_HTML.classList.remove('name-HTML1');
    };
};

all_data.forEach(function(all_data,e){
    all_data.addEventListener('click',function(){
        if(e == imgs.dataset.img){
            if(e== 0){
                innerData(e);
            }
        }else{
            innerData(e);
        }
        data.style.display='grid';
        data_audio.classList.add('data_audio1');
        serch_par.classList.add('data_audio1');
        scrolls.classList.add('data_audio1');
    });
});
clos.addEventListener('click',function(){
    data.style.display='none';
    data_audio.classList.remove('data_audio1');
    serch_par.classList.remove('data_audio1');
    scrolls.classList.add('data_audio1');
});
function innerData(e){
    name.innerHTML = dataS[e].name;
    imgs.dataset.img=e;
    imgs.src = dataS[e].img;
    audios.src = `https://server8.mp3quran.net/lhdan/${all_data[e].dataset.datas1}.mp3`;
    audios.dataset.index=all_data[e].dataset.datas1;
    imgs.alt = `${dataS[e].name}`;
};
icon_play.addEventListener('click',function(){
    if(audios.paused){
        audios.play()
    }else{
        audios.pause()
    };
})

audios.addEventListener('playing',function(){
    icon_play.title = `(n) ايقاف`;
    let icon_playSvg = document.querySelector('.icon_play-vid svg');
    icon_playSvg.innerHTML='<path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>';
    let enter = setInterval(() => {
        let nums = (audios.currentTime / audios.duration) * 100;
        current.innerHTML=`${tim(audios.currentTime)}`;
        hr2.style.width=nums+'%';
    },);
    audios.addEventListener('pause',function(){
        clearInterval(enter);
    })
});
audios.addEventListener('pause',function(){
    icon_play.title = `(n) تشغيل`;
    let icon_playSvg = document.querySelector('.icon_play-vid svg');
    icon_playSvg.innerHTML='<path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>';
});

icon_index2.addEventListener('click',function(e){
    index2();
});
icon_index1.addEventListener('click',function(){
    index1();
});
let numswr = false;
let numswr1 = 0;
audios.addEventListener('loadeddata',function(){
    function swrNump(e)
    {
        let nums = document.createElement('div');
        nums.className = 'swr_inner';
        let nums7 = document.createElement('div');
        nums7.className = "text-img";
        let nums1 = document.createElement('div');
        nums1.className = 'text-swr';
        let nums2 = document.createElement('div');
        nums2.className = 'icons-swr';
        let nums5 = document.createElement('div');
        let nums6 = document.createElement('img');
        nums6.className = 'imgs-sw'
        nums5.className = 'img-swr';
        nums6.src = "صور/بسم الله الرحمان الرحيم.png";
        nums5.appendChild(nums6);
        nums7.appendChild(nums5);
        let nums3 = '<svg height="512px" style="enable-background:new 0 0 512 512;"  viewBox="0 0 512 512" width="512px" xml:space="preserve"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/></svg>';
        let nums4 = document.createElement('h1');
        nums1.appendChild(nums4)
        nums4.innerHTML = span(imgs.dataset.img);
        nums2.innerHTML = nums3;
        nums.appendChild(nums2)
        nums7.appendChild(nums1);
        nums.appendChild(nums7);
        return nums;
    }
    function closswr(){
        numswr = true;
        icon_clos.appendChild(swrNump(imgs.dataset.img));
        hr_icon.classList.add('zIndex');
        let icons_swr = document.querySelector('.icons-swr');
        icons_swr.onclick = ()=>{
            document.querySelector('.swr_inner').remove();
            hr_icon.classList.remove('zIndex');
            numswr = false;
        };
    }
    swr_inner.onclick = ()=>{
        closswr()
    };
    function span(e){
        let num = swr[e]
            .replace(/0/g,'<span>0</span>')
            .replace(/1/g,'<span>1</span>')
            .replace(/2/g,'<span>2</span>')
            .replace(/3/g,'<span>3</span>')
            .replace(/4/g,'<span>4</span>')
            .replace(/5/g,'<span>5</span>')
            .replace(/6/g,'<span>6</span>')
            .replace(/7/g,'<span>7</span>')
            .replace(/8/g,'<span>8</span>')
            .replace(/9/g,'<span>9</span>')
            .replace(/\)/g,'<span>)</span>')
            .replace(/\(/g,'<span>(</span>')
            .replace(/لِلَّهِ/g,'<label>لِلَّهِ</label>')
            .replace(/ٱللَّهُ/g,'<label>ٱللَّهُ</label>')
            .replace(/ٱللَّهِ/g,'<label>ٱللَّهِ</label>')
            .replace(/ٱللَّهَ/g,'<label>ٱللَّهَ</label>')
            .replace(/۩/g,'<span style="font-size:1.0em;">۩ </span>')
        return num;
    }
if(numswr == true)
{
    if(imgs.dataset==8){
        console.log(true);
    }
    document.querySelector('.text-img').scrollTo({
        top:0,
    });
    console.log(imgs.dataset.img);
    document.querySelector('.text-swr h1').innerHTML = span(imgs.dataset.img);
}
hr.addEventListener('mousedown',function(){
        hr.onmousemove = function(e){
            let num = (e.offsetX / hr.clientWidth) * audios.duration;
            audios.currentTime = `${num}`;
            let nums = (audios.currentTime / audios.duration) * 100;
            current.innerHTML=`${tim(audios.currentTime)}`;
            hr2.style.width=nums+'%';
        };
});
hr.addEventListener('mouseup',function(){
        hr.onmousemove=function(){
        };
});



hr.addEventListener('mousemove',function(e){
        let  num = (e.offsetX / hr.clientWidth) * audios.duration;
        hr.style.setProperty('--bb','#123');
        hr.style.setProperty('--ss' , `${e.offsetX-25}px`);
        hr.style.setProperty('--xx' , `"${tim(num)}"`);
});
    document.title = dataS[imgs.dataset.img].name+' القارئ محمد اللحيدان';
    if(imgs.dataset.img==0)
    {
        icon_index1.title = `(shift+B)${dataS[0].name}`;
        icon_index2.title = `(shift+M)${dataS[0].name}`;
    }else
    {
        icon_index1.title = `(shift+B)${dataS[imgs.dataset.img-1].name}`;
        icon_index2.title = `(shift+M)${dataS[+imgs.dataset.img+1].name}`;
    }
    all_data.forEach(function(all_data){
    all_data.classList.remove('all-data1');
    });
    hr.addEventListener('click',function(e){
        let num = (e.offsetX / hr.clientWidth) * audios.duration;
        audios.currentTime = `${num}`;
        let nums = (audios.currentTime / audios.duration) * 100;
        current.innerHTML=`${tim(audios.currentTime)}`;
        hr2.style.width=nums+'%';
        audios.play();
    });
    icon_play.title = `(n) تشغيل`;
    let duer = audios.duration;
    dueri.innerHTML=tim(duer);
    icon_play.classList.remove('icon-loop');
    // audios.play();
    icon_play.innerHTML='<svg viewBox="0 0 384 512" ><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>'
    name.innerHTML = dataS[imgs.dataset.img].name;
    imgs.src = dataS[imgs.dataset.img].img;
    imgs.alt = `${dataS[imgs.dataset.img].name}`;
    all_data[imgs.dataset.img].classList.add('all-data1');
});

document.addEventListener('keydown',function(event){
    if(event.key == 'n'){
        icon_play.click();
    }else if(event.key == 'b'){
        icon_num15.click();
    }else if(event.key == 'm'){
        icon_num_15.click();
    }else if(event.key == 'M'){
        icon_index2.click();
    }else if(event.key == 'B'){
        icon_index1.click();
    }
});

icon_num_15.addEventListener('click',function()
{
    audios.currentTime+=10;
    let nums = (audios.currentTime / audios.duration) * 100;
    current.innerHTML=`${tim(audios.currentTime)}`;
    hr2.style.width=nums+'%';
});
icon_num15.addEventListener('click',function()
{
    audios.currentTime-=10;
    let nums = (audios.currentTime / audios.duration) * 100;
    current.innerHTML=`${tim(audios.currentTime)}`;
    hr2.style.width=nums+'%';
})
function index1(){
    if(audios.currentTime>=360){
        audios.currentTime=0
    } let arrys = []
    if(imgs.dataset.img == 0){
        imgs.dataset.img = dataS.length-1;
        let num = 1+all_data[imgs.dataset.img].dataset.datas1;
        arrys.push(num);
        let arrysNum = arrys.join().substring(1);
        audios.src = `https://server8.mp3quran.net/lhdan/${arrysNum}.mp3`;

    }else{
        imgs.dataset.img--;
        let num = 1+all_data[imgs.dataset.img].dataset.datas1;
        arrys.push(num);
        let arrysNum = arrys.join().substring(1);
        audios.src = `https://server8.mp3quran.net/lhdan/${arrysNum}.mp3`;
    };
};
function index2(){
    let arrys = []
    if(imgs.dataset.img== dataS.length-1){
        imgs.dataset.img = 0;
        let num = 1+all_data[imgs.dataset.img].dataset.datas1;
        arrys.push(num);
        let arrysNum = arrys.join().substring(1);
        audios.src = `https://server8.mp3quran.net/lhdan/${arrysNum}.mp3`;
    }else{
        imgs.dataset.img++;
        let num = 1+all_data[imgs.dataset.img].dataset.datas1;
        arrys.push(num);
        let arrysNum = arrys.join().substring(1);
        audios.src = `https://server8.mp3quran.net/lhdan/${arrysNum}.mp3`;
    };
}
audios.addEventListener('loadstart', function(){
    hr.style.setProperty('--bb','none');
    hr.style.setProperty('--ss' , `${0}`);
    hr.style.setProperty('--xx' , `""`);
    current.innerHTML=`00:00`;
    dueri.innerHTML=`00:00`;
    hr2.style.width = 0 ;
    icon_play.classList.add('icon-loop');
    icon_play.innerHTML='<svg viewBox="0 0 512 512"><path d="M224 32c0-17.7 14.3-32 32-32C397.4 0 512 114.6 512 256c0 46.6-12.5 90.4-34.3 128c-8.8 15.3-28.4 20.5-43.7 11.7s-20.5-28.4-11.7-43.7c16.3-28.2 25.7-61 25.7-96c0-106-86-192-192-192c-17.7 0-32-14.3-32-32z"/></svg>'
    icon_play.title=`... جارٍ التحميل`
});

function tim(tims){
    if(tims < 3600){
        let tims2 = Math.floor((tims % 3600)/60)
        let tims3 = Math.floor(tims % 60)
            < 10 ? `0${Math.floor(tims % 60)}`:Math.floor(tims % 60);
        return `${tims2}:${tims3}`;
    }else{
        let tims1 = Math.floor(tims / 3600);
        let tims2 = Math.floor((tims % 3600)/60)
            < 10 ? `0${Math.floor((tims % 3600)/60)}`:Math.floor((tims % 3600) /60);
        let tims3 = Math.floor(tims % 60)
            < 10 ? `0${Math.floor(tims % 60)}`:Math.floor(tims % 60);
        return `${tims1}:${tims2}:${tims3}`;
    };
};
});