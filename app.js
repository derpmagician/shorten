import './frontend/style.css';
document.addEventListener('DOMContentLoaded', () => {
});

const geturl = () => {
  const arg = $("#fullUrl").val();
  console.log(arg);
  const params = {
    longUrl: arg,
  };
  axios.post("http://localhost:3000/api/urls/shorten", params)
  .then(function(res) {
    const shortEle = document.getElementById("short");
    const msgEle = $('#msg');
    const data = res.data;
    const html = `<p onclick="copyText()" class="text-gray-700 font-semibold px-4 py-4">${data.shortUrl}</p>`
    shortEle.innerHTML  = html;
    navigator.clipboard.writeText(data.shortUrl);

    msgEle.show().html(`
      <div class="bg-green-400 text-white rounded-md font-semibold px-4 py-3 w-full">Link copied to clipboard<div>
    `);
    setTimeout(function(){ msgEle.hide().html('');}, 3000); // 3 seconds later, hide

})
.catch(function(err) {});

};