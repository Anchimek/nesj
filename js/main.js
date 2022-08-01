const header = document.querySelector('.header')
const main = document.querySelector('.main-content')
const menu = document.querySelector('.header-menu--nav-mobile')
const burger = document.querySelector('.header-menu--burger')

burger.addEventListener('click', 
() => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})

menu.addEventListener('click',
() => {
    burger.classList.toggle('active')   
    menu.classList.toggle('active')
})

main.addEventListener('scroll', () => {
   if (main.scrollTop > 50) {
       header.classList.add('active')
       burger.classList.remove('active')
       menu.classList.remove('active') 
    } else {
       header.classList.remove('active')
    }
})


const grades = [
    {
        q: `Nauczycielka bardzo sympatyczna, pełna energii, entuzjazmu. Osoba bardzo inspirująca, która swoją osobą zachęcała do nauki. Doświadczona w uczeniu się języków, cały czas rozwijająca się. Zawsze dobrze przygotowana. Lekcje, które z nią miałem były pełne konwersacji (na czym mi najbardziej zależało). W sposób interesujący prowadziła rozmowy znajdując dobrą równowagę w poprawianiu moich błędów (nie robiła tego zbyt często, ani zbyt rzadko). Materiały, które przygotowywała na lekcji były interesujące: ciekawe gry, filmy, teksty do czytania (tematy z życia wzięte). Polecam!!!`,
        cite: 'Marek'
    },
    {
        q: `Ola is the best German teacher I have ever had! I’ve previously studied german at uni and with the Goethe Institut, where I didn’t enjoy class and felt I didn’t progress much. After only working with Ola for a few weeks I had much more confidence &amp; had rapidly improved my German language skills. One major benefit of 1-2-1 classes is that we corrected errors I was consistently making, I learn at my own pace and content is always relevant to my daily life. Ola is consistent with updating and sending note of class notes which is very beneficial. I cannot recommend Ola enough, it doesn’t always feel like class, most of the time it’s like talking/laughing with a friend, but in German!`,
        cite: 'Natalie'
    },
    {
        q: `Bardzo miła i przyjazna atmosfera, materiał jest przedstawiany w ciekawy sposób. Do tego nie jest to tylko nauka języka jak często bywa w szkole, ale też nauka kultury i tradycji. Jeżeli potrzebuje się więcej czasu na jakiś temat, Ola cierpliwie tłumaczyła i dawała ćwiczenia do domu, aby to przećwiczyć. Kolejnym plusem jest to, że Ola sama przygotowuje materiał i nie musiałam kupować żadnych podręczników. Do tego drukuje różne karty pracy, czasami grałyśmy w gry (po niemiecku oczywiście),co pomagało uczyć się w ciekawszy sposób.
        Ogólnie bardzo polecam, bo to na prawdę miła i wyrozumiała osoba, z którą można się dogadać :D`,
        cite: 'Aleksandra'
    }
] 

const slider = document.querySelector('.section-five--slider')
let count = 1
function move() {

    setInterval(() => {
        slider.innerHTML = `
            <q class="section-five--text">${grades[count].q}</q>
            <cite>${grades[count].cite}</cite>
        `
        count++

        if(count === grades.length) count = 0

    }, 20000)
}
move()