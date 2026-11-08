const $=id=>document.getElementById(id);
const modal=$("modal");let mode="login";
function toast(msg){$("toast").textContent=msg;$("toast").style.display="block";setTimeout(()=>$("toast").style.display="none",3000)}
function openAuth(m){mode=m;$("modalTitle").textContent=m==="login"?"Hesaba daxil ol":"Hesab yarat";$("switchAuth").textContent=m==="login"?"Hesabın yoxdur? Qeydiyyatdan keç":"Artıq hesabın var? Daxil ol";modal.classList.remove("hidden")}
$("accountBtn").onclick=()=>openAuth("login");$("createBtn").onclick=()=>openAuth("register");$("closeModal").onclick=()=>modal.classList.add("hidden");$("switchAuth").onclick=()=>openAuth(mode==="login"?"register":"login");
$("authForm").onsubmit=e=>{e.preventDefault();toast("Demo rejimi: Proton Mail ünvanı qəbul olunur, real autentifikasiya qoşulmayıb.");modal.classList.add("hidden")};
$("apkFile").onchange=e=>{$("fileName").textContent=e.target.files[0]?.name||"Fayl seçilməyib"};
$("uploadForm").onsubmit=e=>{e.preventDefault();const f=$("apkFile").files[0];if(!f)return;if(!f.name.toLowerCase().endsWith(".apk")){toast("Zəhmət olmasa .apk faylı seç.");return}toast("APK seçildi. Serverə yükləmə bu demo versiyada aktiv deyil.");e.target.reset();$("fileName").textContent="Fayl seçmək üçün toxun"};
$("search").oninput=e=>{const q=e.target.value.toLowerCase();document.querySelectorAll(".app-card").forEach(c=>c.style.display=c.innerText.toLowerCase().includes(q)?"":"none")};
document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{document.querySelectorAll(".cat").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");document.querySelectorAll(".app-card").forEach(c=>c.style.display=b.dataset.cat==="Hamısı"||c.dataset.category===b.dataset.cat?"":"none")});
