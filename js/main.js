function submitForm(e) {
  e.preventDefault();
  Swal.fire({
    title: 'Message Sent!',
    text: "We'll be in touch as soon as possible.",
    type: 'success',
    confirmButtonText: 'OK',
    confirmButtonColor: '#333'
  });
}
