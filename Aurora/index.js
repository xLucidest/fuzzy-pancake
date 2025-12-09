function hello() {
    let surp = document.getElementById("surp");
    let hola = document.getElementById("hi");
    let bon = document.getElementById("bonjour");

    let id = setInterval(change, 5);
    let opac = 0;
    let ropac = 1;
    let opac2 = 0;
    function change() {
        if (opac >= 1)
            clearInterval(id);
        else {
            if (opac < 1)
                opac += .012;
                surp.style.opacity = opac;

            if (ropac >= 0.04) {
                ropac -= .04;
                hola.style.opacity = ropac;
            }
            else {
                hola.style.opacity = 0;
                opac2 += .02;
                bon.style.opacity = opac2;
            }
        }
    }
    return true;
}

function a1() {
    let img = document.getElementById("a1");
    img.style.display = "block";
    let num = 0;

    let pick1 = Math.random();
    // img.src=images1[0];
    if (pick1 < .12) {
        num = Math.floor(Math.random() * images2.length);
        img.src = images2[num];
    }
    else {
        num = Math.floor(Math.random() * images1.length);
        img.src = images1[num];
    }
}

const images1 = [
    "https://cdn.discordapp.com/attachments/782347772854534154/826488814767571006/unknown.png?ex=66423bb0&is=6640ea30&hm=a89857e60f0375ac3325bf880f447d7fdf50aa3e7f4a8b79e59e070f30a09b8e&",
    "https://cdn.discordapp.com/attachments/782347772854534154/826488712128757861/unknown.png?ex=66423b98&is=6640ea18&hm=b220c79d61796d65ad40ee47bbd6028be2e9e0d860194649e24a0866f13ce3df&",
    "https://cdn.discordapp.com/attachments/782347772854534154/826489094766723082/unknown.png?ex=66423bf3&is=6640ea73&hm=a9219140b68836074ca3be01d09b3135f029e1906f526b9ced1368a056ceea24&",
    "https://cdn.discordapp.com/attachments/782347772854534154/826489699903602808/unknown.png?ex=66423c83&is=6640eb03&hm=6418a0ea0bfd540d5b797454ff4dcdf4ad3769ffd105c1faf640c6d999064f21&",
    "https://cdn.discordapp.com/attachments/782347772854534154/826490976599801907/unknown.png?ex=66423db4&is=6640ec34&hm=ee71a3a61c6f002172518ff5ab0803f73c9df905d3104d44e80a5975ff42dbfb&",
    "https://media.discordapp.net/attachments/782347772854534154/974448573347405864/unknown.png?ex=6641f534&is=6640a3b4&hm=d16e34de110bf462534ef1fa5692726cb799dc2b2160b9abe2b2c7281f584081&",
    "https://media.discordapp.net/attachments/782347772854534154/983070513905692712/IMG_20220605_141018.jpg?width=446&height=594&ex=664257c3&is=66410643&hm=5107b4b7bff61ced1f78cd26920925f90ef644b1ee7675ebe56088c4e1721eb6&",
    "https://media.discordapp.net/attachments/782347772854534154/903831271623491604/unknown.png?width=1115&height=594&ex=66422237&is=6640d0b7&hm=ca907cf007e4cf7e9262ff59bdeade212d7a5b75fa115768770f648961e60637&",
    "https://media.discordapp.net/attachments/782347772854534154/926148337130930186/unknown.png?ex=66423e5a&is=6640ecda&hm=4e173b471dff8a309bcae5baa4da201666dff4c6c3cf723da83b498938459fc5&",
    "https://media.discordapp.net/attachments/782347772854534154/929192816251387914/unknown.png?ex=66421cfe&is=6640cb7e&hm=7d7e9f650f435990a23ec02857eb822cf1abffd46699a0ea28e4922b2371bc59&",
    "https://media.discordapp.net/attachments/782347772854534154/929193600439422996/unknown.png?ex=66421db9&is=6640cc39&hm=01366f8844e03af3d72d57efe88d8ba59be84fae7e3a55f53525ed4245ef3f1e&",
]

const images2 = [
    "https://cdn.discordapp.com/attachments/782347772854534154/826487903571935262/unknown.png?ex=66423ad7&is=6640e957&hm=87a3d8a41e7e0fc3764503ee6c470f4478092866602ba0d7e2b75d081b9b4339&",
    "https://cdn.discordapp.com/attachments/782347772854534154/826489193521610862/unknown.png?ex=66423c0b&is=6640ea8b&hm=d6004fd766273c0fec87696725670c3ed9e1b1effd62c8daf8ffb60c21a5cd5b&",
    "https://cdn.discordapp.com/attachments/782347772854534154/826489892736860260/unknown.png?ex=66423cb1&is=6640eb31&hm=2afb9a17329acb2289f5a1107b4bba590f9f803e0c6b4721adc816ad80ad5ccd&",
]
