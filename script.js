function SendMail() {
    var params={
        from_name:document.getElementById("fullName").value,
        email_id:document.getElementById("email_id").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_04vpugt","template_o9qm5mf",params).then(function (res){
        alert("Email Success! " + res.status);
    })
    .catch((err) => console.log(err));
};