function submitstudent(details) {
  debugger;
  var firstname = document.getElementById("id_firstname").value;
  var lastname = document.getElementById("id_lastname").value;
  var selclass = document.getElementById("id_selectclass"); //dropdown
  var selvalue = selclass.options[selclass.selectedIndex].value; //for choosing the please select
  var section = document.getElementById("id_selectsection");
  var sectionvalue = section.options[section.selectedIndex].value;
  //Gender
  var gender = document.querySelector("input[name=Gender]:checked");
  var dateofbirth = document.getElementById("id_dob").value;
  var rollNo = document.getElementById("id_rollno").value;
  var admissionNO = document.getElementById("id_admissionno").value;
  var religion = document.getElementById("id_religion").value;
  var email = document.getElementById("id_email").value;
  var fathername = document.getElementById("id_fathername").value;
  var mothername = document.getElementById("id_mothername").value;
  var fatheroccupation = document.getElementById("id_fatheroccupation").value;
  var motheroccupation = document.getElementById("id_motheroccupation").value;
  var phonenumber = document.getElementById("id_phonenumber").value;
  var nationality = document.getElementById("id_nationality").value;
  var presentaddress = document.getElementById("id_presentaddress").value;
  var permanentaddress = document.getElementById("id_permanentaddress").value;
  //======================================================
  if (firstname == "") {
    document.getElementById("id_firstname").classList.add("span_formerror"); //class
  } else {
    document.getElementById("id_firstname").classList.remove("span_formerror");
  }
  if (lastname == "") {
    document.getElementById("id_lastname").classList.add("span_formerror");
  } else {
    document.getElementById("id_lastname").classList.remove("span_formerror");
  }
  if (selvalue == "0") {
    document.getElementById("id_selectclass").classList.add("span_formerror");
  } else {
    document
      .getElementById("id_selectclass").classList.remove("span_formerror");
  }
  if (sectionvalue == "0") {
    document.getElementById("id_selectsection").classList.add("span_formerror");
  } else {
    document
      .getElementById("id_selectsection").classList.remove("span_formerror");
  }
  if (gender == null) {
    document.getElementById("id_gender").classList.add("label_error");
  } else {
    gender = document.querySelector("input[name=Gender]:checked").value;
    document.getElementById("id_gender").classList.remove("label_error");
  }
  if (dateofbirth == "") {
    document.getElementById("id_dob").classList.add("span_formerror");
  } else {
    document.getElementById("id_dob").classList.remove("span_formerror");
  }
  if (rollNo == "") {
    document.getElementById("id_rollno").classList.add("span_formerror");
  } else {
    document.getElementById("id_rollno").classList.remove("span_formerror");
  }
  if (admissionNO == "") {
    document.getElementById("id_admissionno").classList.add("span_formerror");
  } else {
    document
      .getElementById("id_admissionno")
      .classList.remove("span_formerror");
  }
  if (religion == "") {
    document.getElementById("id_religion").classList.add("span_formerror");
  } else {
    document.getElementById("id_religion").classList.remove("span_formerror");
  }
  if (email == "") {
    document.getElementById("id_email").classList.add("span_formerror");
  } else {
    document.getElementById("id_email").classList.remove("span_formerror");
  }
  if (fathername == "") {
    document.getElementById("id_fathername").classList.add("span_formerror");
  } else {
    document.getElementById("id_fathername").classList.remove("span_formerror");
  }
  if (mothername == "") {
    document.getElementById("id_mothername").classList.add("span_formerror");
  } else {
    document.getElementById("id_mothername").classList.remove("span_formerror");
  }
  if (fatheroccupation == "") {
    document
      .getElementById("id_fatheroccupation")
      .classList.add("span_formerror");
  } else {
    document
      .getElementById("id_fatheroccupation")
      .classList.remove("span_formerror");
  }
  if (motheroccupation == "") {
    document
      .getElementById("id_motheroccupation")
      .classList.add("span_formerror");
  } else {
    document
      .getElementById("id_motheroccupation")
      .classList.remove("span_formerror");
  }
  if (phonenumber == "") {
    document.getElementById("id_phonenumber").classList.add("span_formerror");
  } else {
    document
      .getElementById("id_phonenumber")
      .classList.remove("span_formerror");
  }
  if (nationality == "") {
    document.getElementById("id_nationality").classList.add("span_formerror");
  } else {
    document
      .getElementById("id_nationality")
      .classList.remove("span_formerror");
  }
  if (presentaddress == "") {
    document
      .getElementById("id_presentaddress")
      .classList.add("span_formerror");
  } else {
    document
      .getElementById("id_presentaddress")
      .classList.remove("span_formerror");
  }
  if (permanentaddress == "") {
    document
      .getElementById("id_permanentaddress")
      .classList.add("span_formerror");
  } else {
    document
      .getElementById("id_permanentaddress")
      .classList.remove("span_formerror");
  }
  //======================================================
  var isanyerror = false;
  var change = document.querySelectorAll(".cls_addStudentBody *");
  for (var i = 0; i < change.length; i++) {
    if (change[i].classList.contains("span_formerror")) {
      isanyerror = true;
      break;
    }
  }
  debugger
  if (!isanyerror) {
    var studentobj = {
      FirstName: firstname,
      LastName: lastname,
      Class: selvalue,
      Section: sectionvalue,
      Gender: gender,
      DOB: dateofbirth,
      RollNO: rollNo,
      AdmissionNo: admissionNO,
      Religion: religion,
      FatherName: fathername,
      MotherName: mothername,
      FatherOccupation: fatheroccupation,
      MotherOCuupation: motheroccupation,
      PhoneNumber: phonenumber,
      Nationality: nationality,
      PresentAddress: presentaddress,
      PermanentAddress: permanentaddress,
    };
    var studentlist = [];
    studentlist.push(studentobj);
    console.log(studentlist);
    var Jsonstring = JSON.stringify(studentlist);
    console.log(Jsonstring);
    //Sending studentlist data from addstudenthtml to allstudentlist.We should use local storage.
  }
  //======================================================
}
//======================================================
function reset(data) {
  document.getElementById("id_firstname").value = "";
  document.getElementById("id_lastname").value = "";
  document.getElementById("id_selectclass").value = "0";
  document.getElementById("id_selectsection").value = "0";
  var genes = document.getElementsByName("Gender");
  for (var i = 0; i < genes.length; i++) {
    genes[i].checked = false;
  }
  document.getElementById("id_dob").value = "";
  document.getElementById("id_rollno").value = "";
  document.getElementById("id_admissionno").value = "";
  document.getElementById("id_religion").value = "";
  document.getElementById("id_email").value = "";
  document.getElementById("id_fathername").value = "";
  document.getElementById("id_mothername").value = "";
  document.getElementById("id_fatheroccupation").value = "";
  document.getElementById("id_motheroccupation").value = "";
  document.getElementById("id_phonenumber").value = "";
  document.getElementById("id_nationality").value = "";
  document.getElementById("id_presentaddress").value = "";
  document.getElementById("id_permanentaddress").value = "";
  var change = document.querySelectorAll(".cls_addStudentBody *");
  change.forEach((ele) => {
    ele.classList.remove("span_formerror");
  });
  document.getElementById("id_gender").classList.remove("label_error");
}
//======================================================
