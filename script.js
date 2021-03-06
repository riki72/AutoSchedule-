


function Teacher(f_name, l_name, NativeOrB, StartT, EndT, preFWT, prePE, preCT, preBDT, preOIP, preBL,
  preRST, preVT, preAP, preMA, preCP, prePP, kFWT, kSAT, kBBT, kST, kCT, kVT, kA1, kPh, kCP, k2hPP,
  kABCT, kVRT, kSB, kBST, kA2, k4hCP, k4hPP, eFWT, ePT, eST, eSD, eClass1, e2ST, eGA, eC2B, eC2I, eP, eC3, eLFWT, cN, kT ) {
    this.fname = f_name;
    this.lname = l_name;
    this.NativeStatus = NativeOrB ;
    this.Start = StartT ;
    this.End = EndT;
    this.PreSchoolFWT = preFWT;
    this.PreSchoolPE = prePE;
    this.PreSchoolCT = preCT;
    this.PreSchoolBDT = preBDT ;
    this.PreSchoolOIP = preOIP ;
    this.PreSchoolBL = preBL;
    this.PreschoolRST = preRST ;
    this.PreSchoolVT = preVT ;
    this.PreSchoolAP = preAP ;
    this.PreSchoolMA = preMA;
    this.PreSchoolCP = preCP ;
    this.PreSchoolPP = prePP ;
    this.KindyFWT = kFWT ;
    this.KindySAT = kSAT ;
    this.KindyBBT = kBBT;
    this.KindyST = kST ;
    this.KindyCT = kCT ;
    this.KindyVT = kVT ;
    this.KindyA1 = kA1;
    this.KindyPh = kPh;
    this.KindyCP = kCP ;
    this.Kindy2hPP = k2hPP ;
    this.KindyABCT = kABCT ;
    this.KindyVRT = kVRT ;
    this.KindySB = kSB ;
    this.KindyBST = kBST ;
    this.KindyA2 = kA2 ;
    this.Kindy4hCP = k4hCP ;
    this.Kindy4hPP = k4hPP;
    this.EleFWT = eFWT ;
    this.ElePT = ePT ;
    this.EleST = eST;
    this.EleSD = eSD ;
    this.EleClass1 = eClass1 ;
    this.Ele2ST = e2ST ;
    this.EleGA = eGA ;
    this.Class2B = eC2B;
    this.Class2I = eC2I;
    this.EleP = eP;
    this.EleClass3 = eC3;
    this.EleFWTLate = eLFWT;
    this.ClassN = cN;
    this.KindyMain = kT;


  }  // Defining the object, consider it like a object template.
  var TeacherId = 0
  var id = 0; // ...so we can track the id/number of submits.
  var list = []; // Here we will put all the entries, objects.

  document.getElementById("form").onsubmit = function(event) {
    event.preventDefault();
    var name_value = document.getElementById("name").value;
    var lname_value = document.getElementById("lname").value;
    var native = document.getElementById("NativeOrB").value;
    var start =  parseInt(document.getElementById("StartT").value, 10);
    var end = parseInt(document.getElementById("EndT").value, 10);
    var PreSchoolFWT = false;
    var PreSchoolPE = false;
    var PreSchoolCT = false;
    var PreSchoolBDT = false;
    var PreSchoolOIP = false;
    var PreSchoolBL = false;
    var PreSchoolRST = false;
    var PreSchoolVT = false;
    var PreSchoolAP = false;
    var PreSchoolMA = false;
    var PreSchoolCP = false;
    var PreSchoolPP = false;
    var KindyFWT = false;
    var KindySAT = false;
    var KindyBBT = false;
    var KindyST = false;
    var KindyCT = false;
    var KindyVT = false;
    var KindyA1 = false;
    var KindyPh = false;
    var KindyCP = false;
    var Kindy2hPP = false;
    var KindyABCT = false;
    var KindyVRT = false;
    var KindySB = false;
    var KindyBST = false;
    var KindyA2 = false;
    var Kindy4hCP = false;
    var Kindy4hPP = false;
    var EleFWT = false;
    var ElePT = false;
    var EleST = false;
    var EleSD = false;
    var EleClass1 = false;
    var Ele2ST = false;
    var EleGA = false;
    var Class2B = false;
    var Class2I = false;
    var EleP = false;
    var EleClass3 = false;
    var EleFWTLate = false;
    var ClassN = 0 ;
    var KindyTag = false;

    if( list.length < 5){
      list[id] = new Teacher(name_value, lname_value, native, start, end, PreSchoolFWT,
        PreSchoolPE, PreSchoolCT, PreSchoolBDT, PreSchoolOIP, PreSchoolBL, PreSchoolRST,
        PreSchoolVT, PreSchoolAP, PreSchoolMA, PreSchoolCP, PreSchoolPP, KindyFWT, KindySAT, KindyBBT,
        KindyST, KindyCT, KindyVT, KindyA1, KindyPh, KindyCP, Kindy2hPP, KindyABCT, KindyVRT,
        KindySB, KindyBST, KindyA2, Kindy4hCP, Kindy4hPP, EleFWT, ElePT, EleST, EleSD, EleClass1,
        Ele2ST, EleGA, Class2B, Class2I, EleP, EleClass3, EleFWTLate, ClassN, KindyTag);
        id++;}
        else if(list.length == 5){
          document.getElementById('TeacherFull').innerHTML = "Cannot add more teachers"
        };
        if (document.getElementById('TeacherDisplay1').innerHTML.length == 0) { //this seris of Ifs' writes the HTML
          document.getElementById('TeacherDisplay1').innerHTML =   "<table>"+
          "<tr>"+
          "<th>Name</th>"+
          "<th>Native/Bilingual</th>"+
          "<th>Start Time</th>"+
          "<th>Finish Time</th>"+
          "  </tr>"+
          "  <tr>"+
          "<td>"  + document.getElementById("name").value+ " " + document.getElementById("lname").value+ "</td>"+
          "<td>" +native +"</td>"+
          "<td>" +start+  "</td>"+
          "<td>"+ end+  "</td>"+
          "<td>"+"<button type="+"'button'"+ " "+ "name="+"'button'" +" "+"style="+"inline"+ " "+"id="+"'RemoveT1'"+">Remove Teacher</button>"+
          "</tr>"+
          "</table>" ;
          document.getElementById('RemoveT1').addEventListener('click', function(){ removeTeacher(0, 1, document.getElementById('TeacherDisplay1') ) })
        }
        else if(document.getElementById('TeacherDisplay2').innerHTML.length == 0) {
          document.getElementById('TeacherDisplay2').innerHTML =   "<table>"+
          "<tr>"+
          "<th>Name</th>"+
          "<th>Native/Bilingual</th>"+
          "<th>Start Time</th>"+
          "<th>Finish Time</th>"+
          "  </tr>"+
          "  <tr>"+
          "<td>"  + document.getElementById("name").value+ " " + document.getElementById("lname").value+ "</td>"+
          "<td>" +native +"</td>"+
          "<td>" +start+  "</td>"+
          "<td>"+ end+  "</td>"+
          "<td>"+"<button type="+"'button'"+ " "+ "name="+"'button'" +" "+"style="+"inline"+ " "+"id="+"'RemoveT2'"+">Remove Teacher</button>"+
          "</tr>"+
          "</table>" ;
          document.getElementById('RemoveT2').addEventListener('click', function(){ removeTeacher(1, 1, document.getElementById('TeacherDisplay2') ) })


        }
        else if(document.getElementById('TeacherDisplay3').innerHTML.length == 0) {
          document.getElementById('TeacherDisplay3').innerHTML =   "<table>"+
          "<tr>"+
          "<th>Name</th>"+
          "<th>Native/Bilingual</th>"+
          "<th>Start Time</th>"+
          "<th>Finish Time</th>"+
          "  </tr>"+
          "  <tr>"+
          "<td>"  + document.getElementById("name").value+ " " + document.getElementById("lname").value+ "</td>"+
          "<td>" +native +"</td>"+
          "<td>" +start+  "</td>"+
          "<td>"+ end+  "</td>"+
          "<td>"+"<button type="+"'button'"+ " "+ "name="+"'button'" +" "+"style="+"inline"+ " "+"id="+"'RemoveT3'"+">Remove Teacher</button>"+
          "</tr>"+
          "</table>" ;
          document.getElementById('RemoveT3').addEventListener('click', function(){ removeTeacher(2, 1, document.getElementById('TeacherDisplay3') ) })

        }
        else if(document.getElementById('TeacherDisplay4').innerHTML.length == 0) {
          document.getElementById('TeacherDisplay4').innerHTML =   "<table>"+
          "<tr>"+
          "<th>Name</th>"+
          "<th>Native/Bilingual</th>"+
          "<th>Start Time</th>"+
          "<th>Finish Time</th>"+
          "  </tr>"+
          "  <tr>"+
          "<td>"  + document.getElementById("name").value+ " " + document.getElementById("lname").value+ "</td>"+
          "<td>" +native +"</td>"+
          "<td>" +start+  "</td>"+
          "<td>"+ end+  "</td>"+
          "<td>"+"<button type="+"'button'"+ " "+ "name="+"'button'" +" "+"style="+"inline"+ " "+"id="+"'RemoveT4'"+">Remove Teacher</button>"+
          "</tr>"+
          "</table>" ;
          document.getElementById('RemoveT4').addEventListener('click', function(){ removeTeacher(3, 1, document.getElementById('TeacherDisplay4') ) })

        }
        else if(document.getElementById('TeacherDisplay5').innerHTML.length == 0) {
          document.getElementById('TeacherDisplay5').innerHTML =   "<table>"+
          "<tr>"+
          "<th>Name</th>"+
          "<th>Native/Bilingual</th>"+
          "<th>Start Time</th>"+
          "<th>Finish Time</th>"+
          "  </tr>"+
          "  <tr>"+
          "<td>"  + document.getElementById("name").value+ " " + document.getElementById("lname").value+ "</td>"+
          "<td>" +native +"</td>"+
          "<td>" +start+  "</td>"+
          "<td>"+ end+  "</td>"+
          "<td>"+"<button type="+"'button'"+ " "+ "name="+"'button'" +" "+"style="+"inline"+ " "+"id="+"'RemoveT5'"+">Remove Teacher</button>"+
          "</tr>"+
          "</table>" ;
          document.getElementById('RemoveT5').addEventListener('click', function(){ removeTeacher(4, 1, document.getElementById('TeacherDisplay5') ) })
        }
      };  // Creating the new object (could be new acc for example), with the entered parameters.

      //functions for generating the ideal number and assigning it ot the teachers

      function TeacherNumber (dec,TNumb) {
        Result = 38 * dec ;
        Result2 = Result / TNumb;
        return Result2
      }
      //to set the native teacher's ideal class number
      document.getElementById('Test2').addEventListener('click', function (){
        var Teachernumb = list.filter(function(Teacher){
          return Teacher.NativeStatus == "native"});

          NativeNumber =  TeacherNumber( document.getElementById('NativeP').value, Teachernumb.length);

          for( var i in list) {
            if ( list[i].NativeStatus == "native") {
              list[i].IdealClassn = NativeNumber
            }
          }
        });
        //end

        //to set the bilingual teacher's ideal class NativeNumber
        document.getElementById('Test2').addEventListener('click', function (){
          var Teachernumb = list.filter(function(Teacher){
            return Teacher.NativeStatus == "bilingual"});

            BilingualNumber =  TeacherNumber( document.getElementById('BilingualP').value, Teachernumb.length);

            for( var i in list) {
              if ( list[i].NativeStatus == "bilingual") {
                list[i].IdealClassn = BilingualNumber
              }
            }
          });
          //end


          //new function for REMOVING THE OBJECTS using the remove teacher button

          function removeTeacher(begin, deleteO, targetDisplay) {
            list.splice(begin, deleteO);
            targetDisplay.innerHTML = ""
            if(list.length < 5) {document.getElementById('TeacherFull').innerHTML = ""
          };
        };

        //Begining of Algorithem for sorting and making the Assignments

        function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
        };


  //assignment of classes



              //DONT DELETE DUMB DUMB VERY IMPORTANT
              function addAssign2(className,teach){   //function to add assigned lesson to the Teacher Object
                for( var i in list) {
                  if(list[i].fname === teach) {
                    list[i][className] = true;
                    list[i].ClassN++;
                    break;
                  }}};

                  //pre school lesson assignment fucntion
                  function LessonAssignPre(currentClass, elementTag, startTimeLimiter) {
                    var CurrentClass = currentClass;
                    var FullClasses = list.filter(function(Teacher){
                      return Teacher.ClassN < Teacher.IdealClassn
                    });
                    //Filter to remove teachers who start too late
                    var PreTeachers = FullClasses.filter(function(Teacher){
                      return parseInt(Teacher.Start) < startTimeLimiter
                    });
                    var PreTeach = PreTeachers [getRandomInt(PreTeachers.length)];
                    document.getElementById(elementTag).innerHTML = PreTeach.fname;
                    addAssign2(CurrentClass, PreTeach.fname)
                  };

// PreSchool assignment function call block
document.getElementById('test').addEventListener('click', function(){ LessonAssignPre('PreSchoolFWT', 'PreFWTLead', 930)}); //Fun With Teacher
document.getElementById('test').addEventListener('click', function(){ LessonAssignPre('PreSchoolPE', 'PrePELead', 930)});// PE assignment
document.getElementById('test').addEventListener('click', function(){ LessonAssignPre('PreSchoolCT', 'PreCTLead', 930)});// Circle time assignment
document.getElementById('test').addEventListener('click', function(){ LessonAssignPre('PreSchoolBDT', 'PreBDTLead', 930)}); //Bathroom and Drink time
document.getElementById('test').addEventListener('click', function(){ LessonAssignPre('PreSchoolOIP', 'PreOIPLead', 930)}); //indoor/outdoor play
document.getElementById('test').addEventListener('click', function(){ LessonAssignPre('PreSchoolBL', 'PreBLLead', 1115)});// bathroom and lunch
document.getElementById('test').addEventListener('click', function(){ LessonAssignPre('PreSchoolRST', 'PreRSTLead', 1115)});// reading and story time
document.getElementById('test').addEventListener('click', function(){ LessonAssignPre('PreSchoolVT', 'PreVTLead', 1115)});//Vocab time
document.getElementById('test').addEventListener('click', function(){ LessonAssignPre('PreSchoolAP', 'PreAPLead', 1115)}); // Alphabet and phonics
document.getElementById('test').addEventListener('click', function(){ LessonAssignPre('PreSchoolMA', 'PreMALead', 1115)});//main activity
document.getElementById('test').addEventListener('click', function(){ LessonAssignPre('PreSchoolCP', 'PreCPLead', 1115)});//Class Presentation
document.getElementById('test').addEventListener('click', function(){ LessonAssignPre('PreSchoolPP', 'PrePPLead', 1115)}); // parents presentation

//END OF PRESCHOOL

          //Kindy Assignments

          function LessonAssignKindy(currentClass, elementTag, startTimeLimiter) {
              CurrentClass = currentClass
              var FullClasses = list.filter(function(Teacher){
                return Teacher.ClassN < Teacher.IdealClassn
              });
              //Filter to remove teachers who start too late
              var KindyTeachers = FullClasses.filter(function(Teacher){
                return parseInt(Teacher.Start) < startTimeLimiter
              });
              var KindyTeach = KindyTeachers [getRandomInt(KindyTeachers.length)];
              document.getElementById(elementTag).innerHTML = KindyTeach.fname;
              addAssign2(CurrentClass, KindyTeach.fname)
            };


//Kindy assignment function call block
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('KindyFWT', 'KindyFWTLead', 1115)});//Fun with teacher
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('KindySAT', 'KindySATLead', 1115)});//show and tell
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('KindyBBT', 'KindyBBTLead', 1115)});// bathroom and book time
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('KindyST', 'KindySTLead', 1115)}); //Snack time
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('KindyCT', 'KindyCTLead', 1115)});//Circle time
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('KindyVT', 'KindyVTLead', 1115)});//Vocab time
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('KindyA1', 'KindyA1Lead', 1115)});//Activity 1
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('KindyPh', 'KindyPhLead', 1115)});//kindy phonics
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('KindyCP', 'KindyCPLead', 1115)});//class presentation
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('Kindy2hPP', 'Kindy2hPPLead', 1115)});//2 hour parents presentation
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('KindyABCT', 'KindyABCTLead', 1115)}); //abc time and bathroom
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('KindyVRT', 'KindyVRTLead', 1115)}); //Vocab review time and bathroom
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('KindySB', 'KindySBLead', 1115)}); //spelling bee
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('KindyBST', 'KindyBSTLead', 1115)}); //story time
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('KindyA2', 'KindyA2Lead', 1115)}); //activity 2
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('Kindy4hCP', 'Kindy4hCPLead', 1115)}); //4 hour class presentation
document.getElementById('test').addEventListener('click', function(){ LessonAssignKindy('Kindy4hPP', 'Kindy4hPPLead', 1115)});//4 hour parents presentation

// end of kindy

//begining of Elementary assignment



          function LessonAssignEle(currentClass, elementTag, startTimeLimiter) {



        if (currentClass == 'EleFWT') {
          let CurrentClass = currentClass
          let Full = list.filter( Teacher => Teacher.ClassN < Teacher.IdealClassn);
          let AssignedT = Full.filter( Teacher => Teacher.PreSchoolAP == false && Teacher.PreSchoolMA == false && Teacher.PreSchoolCP == false && Teacher.PreSchoolPP == false);
          var EleTeach = AssignedT[getRandomInt(AssignedT.length)];
          addAssign2(CurrentClass, EleTeach.fname);
          document.getElementById(elementTag).innerHTML = EleTeach.fname
          }
          else if (currentClass == 'ElePT') {
            let CurrentClass = currentClass
          let Full = list.filter( Teacher => Teacher.ClassN < Teacher.IdealClassn);
          let AssignedT = Full.filter(Teacher => Teacher.KindyFWT == false && Teacher.KindySAT == false && Teacher.KindyBBT == false && Teacher.KindyST == false)
          var EleTeach = AssignedT[getRandomInt(AssignedT.length)];
          addAssign2(CurrentClass, EleTeach.fname);
          document.getElementById(elementTag).innerHTML = EleTeach.fname
            }
          else if (currentClass == 'EleST') {
              let CurrentClass = currentClass
          let Full = list.filter( Teacher => Teacher.ClassN < Teacher.IdealClassn);
          let AssignedT = Full.filter(Teacher => Teacher.KindyCT == false)
          var EleTeach = AssignedT[getRandomInt(AssignedT.length)];
          addAssign2(CurrentClass, EleTeach.fname);
          document.getElementById(elementTag).innerHTML = EleTeach.fname
            }
          else if (currentClass == 'EleSD') {
              let CurrentClass = currentClass
          let Full = list.filter( Teacher => Teacher.ClassN < Teacher.IdealClassn);
          let AssignedT = Full.filter(Teacher => Teacher.KindyCT == false && Teacher.KindyVT == false)
          var EleTeach = AssignedT[getRandomInt(AssignedT.length)];
          addAssign2(CurrentClass, EleTeach.fname);
          document.getElementById(elementTag).innerHTML = EleTeach.fname
            }
          else if (currentClass == 'EleClass1') {
              let CurrentClass = currentClass
          let Full = list.filter( Teacher => Teacher.ClassN < Teacher.IdealClassn);
          let AssignedT = Full.filter( Teacher => Teacher.KindyA1 == false && Teacher.KindyPh == false && Teacher.KindyCP == false)
          var EleTeach = AssignedT[getRandomInt(AssignedT.length)];
          addAssign2(CurrentClass, EleTeach.fname);
          document.getElementById(elementTag).innerHTML = EleTeach.fname
                }
          else if (currentClass == 'Ele2ST') {
              let CurrentClass = currentClass
            let Full = list.filter( Teacher => Teacher.ClassN < Teacher.IdealClassn);
            let AssignedT = Full.filter( Teacher => Teacher.KindyPh == false && Teacher.KindyCP == false)
            var EleTeach = AssignedT[getRandomInt(AssignedT.length)];
            addAssign2(CurrentClass, EleTeach.fname);
            document.getElementById(elementTag).innerHTML = EleTeach.fname
          }
          else if (currentClass == 'EleGA') {
            let CurrentClass = currentClass
          let Full = list.filter( Teacher => Teacher.ClassN < Teacher.IdealClassn);
          let AssignedT = Full.filter( Teacher => Teacher.KindyPh == false && Teacher.KindyCP == false && Teacher.Kindy2hPP == false);
          var EleTeach = AssignedT[getRandomInt(AssignedT.length)];
          addAssign2(CurrentClass, EleTeach.fname);
          document.getElementById(elementTag).innerHTML = EleTeach.fname
          }
          else if (currentClass == 'Class2B') {
              let CurrentClass = currentClass
            let Full = list.filter( Teacher => Teacher.ClassN < Teacher.IdealClassn);
            let AssignedT = Full.filter(Teacher => Teacher.KindyVRT == false && Teacher.KindySB == false && Teacher.KindyBST == false && Teacher.KindyA2 == false);
            var EleTeach = AssignedT[getRandomInt(AssignedT.length)];
            addAssign2(CurrentClass, EleTeach.fname);
            document.getElementById(elementTag).innerHTML = EleTeach.fname
          }
          else if (currentClass == 'Class2I') {
              let CurrentClass = currentClass
            let Full = list.filter( Teacher => Teacher.ClassN < Teacher.IdealClassn);
            console.log(Full);
            let AssignedT = Full.filter(Teacher => Teacher.KindyVRT == false && Teacher.KindySB == false && Teacher.KindyBST == false && Teacher.KindyA2 == false && Teacher.Class2B == false)
            console.log(AssignedT);
            var EleTeach = AssignedT[getRandomInt(AssignedT.length)];
            console.log(EleTeach);
            addAssign2(CurrentClass, EleTeach.fname);
            document.getElementById(elementTag).innerHTML = EleTeach.fname
          }
          else if (currentClass == 'EleP') {
              let CurrentClass = currentClass
            let Full = list.filter( Teacher => Teacher.ClassN < Teacher.IdealClassn);
            let AssignedT = Full.filter(Teacher => Teacher.KindyA2 == false && Teacher.Kindy4hCP == false)
            var EleTeach = AssignedT[getRandomInt(AssignedT.length)];
            addAssign2(CurrentClass, EleTeach.fname);
            document.getElementById(elementTag).innerHTML = EleTeach.fname
          }
        else if (currentClass == 'EleClass3') {
            let CurrentClass = currentClass
          let Full = list.filter( Teacher => Teacher.ClassN < Teacher.IdealClassn);
          let AssignedT = Full.filter(Teacher =>  Teacher.Kindy4hPP == false)
          var EleTeach = AssignedT[getRandomInt(AssignedT.length)];
          addAssign2(CurrentClass, EleTeach.fname);
          document.getElementById(elementTag).innerHTML = EleTeach.fname
        }
      };

// elementary assign callblock
document.getElementById('test').addEventListener('click', function(){ LessonAssignEle('EleFWT', 'EleFWTLead', 1200)});
document.getElementById('test').addEventListener('click', function(){ LessonAssignEle('ElePT', 'ElePTLead', 1200)});
document.getElementById('test').addEventListener('click', function(){ LessonAssignEle('EleST', 'EleSTLead', 1200)});
document.getElementById('test').addEventListener('click', function(){ LessonAssignEle('EleSD', 'EleSDLead', 1200)});
document.getElementById('test').addEventListener('click', function(){ LessonAssignEle('EleClass1', 'EleClass1Lead', 1200)});
document.getElementById('test').addEventListener('click', function(){ LessonAssignEle('Ele2ST', 'Ele2STLead', 1200)});
document.getElementById('test').addEventListener('click', function(){ LessonAssignEle('EleGA', 'EleGALead', 1200)});
document.getElementById('test').addEventListener('click', function(){ LessonAssignEle('Class2B', 'Class2BeginnerLead', 1200)});
document.getElementById('test').addEventListener('click', function(){ LessonAssignEle('Class2I', 'Class2IntermediateLead', 1200)});
document.getElementById('test').addEventListener('click', function(){ LessonAssignEle('EleP', 'ElePLead', 1200)});
document.getElementById('test').addEventListener('click', function(){ LessonAssignEle('EleClass3', 'EleClass3Lead', 1200)});

// Final Checker to fix the problems of random assignment

function Checker(elementID, filFun){
 var inner = document.getElementById(elementID).innerHTML;

if ( inner == '()') {
  let Backup = list.filter(filFun)
  console.log(Backup);
  let Backup2 = Backup[getRandomInt(Backup.length)];
  document.getElementById(elementID).innerHTML = Backup2.fname
}
  else {
    console.log( elementID + 'this is fine');
  }
};

document.getElementById('test').addEventListener('click', function(){ Checker('EleFWTLead', Teacher => Teacher.PreSchoolAP == false && Teacher.PreSchoolMA == false && Teacher.PreSchoolCP == false && Teacher.PreSchoolPP == false )});
document.getElementById('test').addEventListener('click', function(){ Checker('ElePTLead', Teacher => Teacher.KindyFWT == false && Teacher.KindySAT == false && Teacher.KindyBBT == false && Teacher.KindyST == false )});
document.getElementById('test').addEventListener('click', function(){ Checker('EleSTLead', Teacher => Teacher.KindyCT == false )});
document.getElementById('test').addEventListener('click', function(){ Checker('EleSDLead', Teacher => Teacher.KindyCT == false && Teacher.KindyVT == false)});
document.getElementById('test').addEventListener('click', function(){ Checker('EleClass1Lead', Teacher => Teacher.KindyA1 == false && Teacher.KindyPh == false && Teacher.KindyCP == false )});
document.getElementById('test').addEventListener('click', function(){ Checker('Ele2STLead', Teacher => Teacher.KindyPh == false && Teacher.KindyCP == false )});
document.getElementById('test').addEventListener('click', function(){ Checker('EleGALead', Teacher => Teacher.KindyPh == false && Teacher.KindyCP == false && Teacher.Kindy2hPP == false)});
document.getElementById('test').addEventListener('click', function(){ Checker('Class2BeginnerLead', Teacher => Teacher.KindyVRT == false && Teacher.KindySB == false && Teacher.KindyBST == false && Teacher.KindyA2 == false)});
document.getElementById('test').addEventListener('click', function(){ Checker('Class2IntermediateLead', Teacher => Teacher.KindyVRT == false && Teacher.KindySB == false && Teacher.KindyBST == false && Teacher.KindyA2 == false && Teacher.Class2B == false )});
document.getElementById('test').addEventListener('click', function(){ Checker('ElePLead', Teacher => Teacher.KindyA2 == false && Teacher.Kindy4hCP == false)});
document.getElementById('test').addEventListener('click', function(){ Checker('EleClass3Lead', Teacher => Teacher =>  Teacher.Kindy4hPP == false)});
