// let username = prompt("Enter your name");
// console.log(username);

let pagebody = document.querySelectorAll('.pagebody')[0];

let semscount = document.getElementById('semscount');

let seminput = document.getElementById('noofsems');

let sembox = document.getElementById('sembox');

let semcontainer = document.getElementById('semscontainer');

let sembody = document.querySelectorAll('.sembody');

let submitarea = document.getElementById('submitarea');

let submit = document.getElementById('submit');

let resetarea = document.getElementById('resetarea');

let reset = document.getElementById('reset');

let resultcontainer = document.getElementsByClassName('resultcontainer')[0];

let finalresult = document.getElementsByClassName('finalresult')[0];

let extraresult = document.getElementsByClassName('extraresult')[0];

let extras = document.getElementsByClassName('extras');


console.log(pagebody.childNodes);


console.log(pagebody);


// console.log(sembox.innerText);

// if (sembox.innerText == '') 
//      {
          takeinput();
     
// else if (sembox.innerText != '') 
//      {
//           sembox.removeChild(semcontainer);
//      }



function takeinput() {

     
     
     seminput.addEventListener("change", ()=>{ 
          
          semnos = Number(seminput.value);
          
          console.log(semnos);

          console.log(isNaN(semnos));



          if (isNaN(semnos) || semnos == 0) {

               console.log("Invalid Input ❌");
               alert("Invalid Input! Please enter an appropriate number")
               reset.style.display = 'inline-block';
               
               
          } else {
               
               console.log("Input OK 👍");
               renderDOM(semnos);

          }






          for (let v = 1; v <= semnos; v++) {

                    
                  console.log(v);
//                document.getElementById(`sem${v}grd`).value = v+888;
//                document.getElementById(`sem${v}crdt`).value = v+22;
               
          }



     });


     function renderDOM(smstr) {


          // nosofsem = document.getElementById('noofsems').value;
          // console.log(nosofsem);

          console.log(smstr);
          console.log(typeof(smstr));

          // semno = smstr;


          reset.style.display = 'inline-block'
          // reset.style.opacity = '1'

          

          
               for(i=0; i<smstr; i++)

               {
                    
                    document.getElementById('semscount').innerHTML = 
                    `
                    <hr class="semsplit">
                    ${i+1} Semester(s) ~ ${(i+1)/2} Years! 
                    <hr class="semsplit"> <br>`;
                    
                    const newdiv = document.createElement('div');
                    
                    newdiv.innerHTML =  
                    `<center> Semester ${(i+1)} </center> <br> 
                    Grade of Sem ${(i+1)}: <input type="number" id="sem${i+1}grd"> <br><br>
                    Credit of Sem ${(i+1)}: <input type="number" id="sem${i+1}crdt"> <br><br>
                    <hr class="semsplit">`;
                    
                    newdiv.classList.add(`sems`);
                    newdiv.setAttribute(`id` , `sem${i+1}`);
                    
                    
                    // console.log(i+1);
                    // console.log(newdiv);
                    // console.log(semcontainer);

                    // semcontainer.insertAdjacentElement("afterend", newdiv);

                    semcontainer.append(newdiv);

               }


               
               
          // const submitbtn = document.createElement('button');        
          // submitbtn.innerHTML = "Calculate";      
          // submitbtn.setAttribute(`id` , `submit`);      
          // submitarea.append(submitbtn);



          submit.style.display = 'inline-block';
          // submit.style.opacity = "1";

          

          submit.addEventListener('click', ()=>{

               // alert("Submitted!");
               console.log("Submitted!");
               console.log(smstr);

          

               grd = new Array();
               crdt = new Array();
               grdsum = 0;
               crdtsum = 0;

                    for(k=1; k<=(smstr); k++) {

                    // Using Array

          
                         // console.log(k);
                         // console.log(typeof(grd));

                         grd.push(Number(document.getElementById(`sem${k}grd`).value));
                         crdt.push(Number(document.getElementById(`sem${k}crdt`).value));
                         
                         grdsum += Number(document.getElementById(`sem${k}grd`).value);
                         crdtsum += Number(document.getElementById(`sem${k}crdt`).value);

                         // grd Number(document.getElementById(`sem${k}grd`).value);
                         // }

                         // grdval = [];

                         // grdval.push(grd);
                         
                         
                         // grd.push(document.getElementById(`sem${k}grd`).value);
                         // grdttl += document.getElementById(`sem${k}grd`).value;
                         // crdtttl += document.getElementById(`sem${k}crdt`).value;
                         
                    }
                    
                   
               // console.log(grd);
               // console.log(grdsum);
               // console.log(crdt);
               // console.log(crdtsum);
               // console.log(typeof(grd));

               // result = grdsum/crdtsum;
               // resultfinal = result.toFixed(2);
               // console.log(result);
               // console.log(resultfinal);



               // grd.forEach((echval) => {
               //      console.log(echval);
               // });


               egp = new Array();
               grdtotal = 0;
               egptotal = 0;
               crdttotal = 0;

               for (let j = 0; j < smstr; j++) {

                    console.log(j+1);

                    grdnow = grd[j];
                    crdtnow = crdt[j];

                    grdtotal += grd[j]
                    crdttotal += crdt[j];

                    egpnow = Math.round(grdnow * crdtnow);
                    egp.push(egpnow);
                    
                    console.log("grade current sem: "+ grdnow);
                    console.log("credit current sem: "+ crdtnow);
                    console.log(`egp current sem: ${egpnow}`);

                    console.log(grd);
                    console.log(crdt);
                    console.log(egp);

                    console.log(`grdtotal: ${grdtotal}`);
                    console.log(`crdttotal: ${crdttotal}`);
                    
               }
               
               egp.forEach((vlu) => {
                    egptotal += vlu;
               });

               console.log(egptotal);

               result = (egptotal / crdttotal).toFixed(2);

               console.log("Result: " + result);
               
               


               pagebody.style.display = 'flex';
               resultcontainer.style.display = 'block';

               finalresult.innerHTML = 
               `Your Average Grade for all ${smstr} Semester(s) is: <br><br> ${result} <br><br>
               <hr class="resultsplit"> <br><br>`;


               
               grdcrnt = 0;
               egpcrnt = 0;
               crdtcrnt = 0;

               for (x = 0; x < smstr; x++) {
                    
                    console.log(x);

                    // grdcrnt += grd[x];
                    // console.log(grdcrnt);

                    egpcrnt += egp[x];
                    crdtcrnt += crdt [x];
                    grdcrnt = (egpcrnt / crdtcrnt).toFixed(2);
                    

                    const extrainfo = document.createElement('div');
                    extrainfo.classList.add(`extras`);
                    extraresult.append(extrainfo);

                    extrainfo.innerHTML =
                    `Average Grade upto Semester ${x+1} is: &nbsp; ${grdcrnt} <br><br>
                    <hr class="semsplit"> <br>`;

               }


               xtraresultnds =  extraresult.childNodes;

               console.log(xtraresultnds);

               xtraresultnds.forEach((nds) => {
                    console.log(nds);
               });
                    
               console.log(extras);
                    
          });





               
          console.log("nos of sems " + smstr);

          return smstr;
                    
     }

     console.log(sembody);

     function resetinput() {

     
          reset.addEventListener('click', ()=> {

               console.log(sembody[0].innerHTML);
               console.log(semnos);
               seminput.value = "";
               sembody[1].innerHTML = "";
               sembody[2].innerHTML = "";
               sembody[3].style.display = 'none';
               reset.style.display = 'none';
               resultcontainer.style.display = 'none';
               finalresult.innerHTML = "";


               // console.log(extraresult.parentNode.childNodes[3].childNodes);
               console.log(extraresult.parentNode);
               console.log(extraresult.childNodes);
               console.log(extraresult.children);
               //  extraresult.parentNode.removeChild(extraresult);
               //  extraresult.childNodes.removeChild(extras);
               console.log(resultcontainer.childNodes);
               console.log(extras);
               console.log(extras.length);
               console.log(Array.from(extras));
               console.log(Array.from(extras).length);
               
               extraresult.innerHTML = "";
               // Array.from(extras).forEach((p) => {
               //      console.log(p);
               //      p.remove();
               // });


               for (n = 0; n <= semnos; n++) {
               

                    chldrns = extraresult.childNodes[n];

                    console.log(chldrns);

                    // chldrns.remove();


                    // console.log(chldrns.parentNode);

                    // chldrns.parentNode.removeChild(chldrns);

                    
                    // extras[n].parentNode.removeChild(extras[n]);
                    
                    // or
                    
                    // extraresult.removeChild(extras[n]);

               }
               
               
               // extraresult.innerHTML = "";


               // xtraresultnds.forEach((nds) => {
               //         chldnds = extraresult.removeChild(nds);
               //         console.log(chldnds);
                    
               // });

               // console.log(xtraresultnds);
                    
                    
               console.log(extras);



          });

     }


     resetinput();


// console.log(semnos)






  
}




console.log(reset);
console.log(sembody);
console.log(sembox);















// console.log(sembox.innerText);
// eachsem.innerText = username;


     // if (reset) {

     // reset.addEventListener('click', ()=> {
     //      sembody[0].innerHTML = '';
     // })

     // }



// console.log(smstr);
          // if(smstr !== smstr) 
          // {
          //      sembox.removeChild(semcontainer);
          // }

               
 
          // document.getElementById('sem3grd').value = 3;
          // document.getElementById('sem3crdt').value = 6;
