const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', () => {
    noBtn.style.display = 'None';
    yesBtn.style.display = 'None';

    const fireDiv = document.querySelector('.fireworksDiv');

    fireDiv.style.setProperty('position', 'absolute');
    fireDiv.style.setProperty('width', '100%');
    fireDiv.style.setProperty('min-height', '100vh');
    fireDiv.style.setProperty('z-index', '9');

    const fireworks = new Fireworks(fireDiv,{})
    fireworks.start();

    document.querySelector('.question').innerHTML = 'yippee!! good choice!'
    document.getElementById('subheading').innerHTML = '(this is legally binding btw)'

    document.getElementById('puppycat').style.display='none';
    document.getElementById('sat').style.display='inline-block';

    document.querySelector('.note').innerHTML = 'hi mitchel! you are so special and wonderful and I appreciate you!! please enjoy this ~official~ noaa satellites valentines meme. you are so genuinely kind and caring all the time, and I&apos;m  lucky to get to know you (and force you to listen to my goofy thoughts)! thank you for always being so silly and sweet with me :) I really wanted to send a little package with some SWEET TREATS out to you but then LANDON >:( and the US POST OFFICE HOURS >:( ruined my plans >:( so this is just going to have to tide you over until we get to new orleans!! >:) valentines smooches are officially on backlog!!</br>xoxo rachel</br><small>also this was literally so fun to make lol</small>'
});

noBtn.addEventListener('mouseover', () => {
    const wrapper = document.querySelector('.wrapper');
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});



