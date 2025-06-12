let colorsHTML = "";
colors.forEach((item, index) => {
  colorsHTML += `
    <div class="grid-container    js-grid-container mx-auto max-w-md overflow-hidden md:max-w-2xl ">
        <div class="wrapper">
          <div class="wrapper-color-templates  flex "> 
            <div class="color-views max-w-md w-[50px] h-[120px] js-copy-color-code" style="background-color: #${item.color1}">${item.color1}</div>
            <div class="color-views max-w-md w-[50px] h-[120px] js-copy-color-code" style="background-color: #${item.color3}">${item.color3}</div>
            <div class="color-views max-w-md w-[50px] h-[120px] js-copy-color-code" style="background-color: #${item.color4}">${item.color4}</div>
            <div class="color-views max-w-md w-[50px] h-[120px] js-copy-color-code" style="background-color: #${item.color5}">${item.color5}</div>
          </div>

        </div>
    </div>
  `;
});
document.querySelector(".js-grid-container").innerHTML = colorsHTML;
