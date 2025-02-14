const LanguageDataArr = {
  "about" : {
    "en" : "About",
    "ru" : "Обо мне",
  },
  "games" : {
    "en" : "Games",
    "ru" : "Игры",
  },
  "trailers" : {
    "en" : "Trailers",
    "ru" : "Трейлеры",
  },
  "trailers2" : {
    "en" : "Trailers",
    "ru" : "Трейлеры",
  },
  "spoilers" : {
    "en" : "Spoilers",
    "ru" : "Спойлеры",
  },
  "contacts" : {
    "en" : "Contacts",
    "ru" : "Контакты",
  },

  "tb_game" : {
    "en" : "THE BEST GAME",
    "ru" : "ЛУЧШАЯ ИГРА",
  },
  "about_tb_game" : {
    "en" : "You've fallen into a trap. Your environment is a computer and a strange creature outside the door. Cancel the installation of the virus and scare away the monster with the light of a lantern, but be careful the air outside the door is clearly infected with toxic substances!",
    "ru" : "Вы попали в ловушку. Ваше окружение - компьютер и странное существо за дверью. Отменяйте установку вируса и отпугивайте монстра светом фонаря, но будьте осторожны, воздух за дверью явно заражён ядовитыми веществами!",
  },

  "about_me" : {
    "en" : "About me",
    "ru" : "Обо мне",
  },
  "about_me_text" : {
    "en" : "I am an indie developer. I started my career with the Unity game engine and still write games on it. At the beginning of August 2024, I registered on the platform Itch.Io , where I still release games. My first game on the Itch platform, Secret Hideout, in the survival horror genre, took off in terms of views and downloads. I obviously didn't expect this. Then he released the Birdie game. It's a simple shooter, I got the idea from their Moorhuhn game. Then the second part of the shooter and the Big Road game were released. After the third part of the shooter, I started thinking about what to develop next. I'm currently working on a new horror game, because I realized that the most downloaded games are horror games with Android support.",
    "ru" : "Я - инди разработчик. Начинал свою карьеру с игрового движка Unity и до сих пор пишу игры на нём. В начале августа 2024 года, я зарегистрировался на платформе Itch.Io, где до сих пор выпускаю игры. Моя первая игра на платформе Itch - Secret Hideout, в жанре survival horror, взлетела по просмотрам и скачиваниям. Я такого явно не ожидал. Потом выпустил игру Birdie. Это простой шутер, идею я взял их игры Moorhuhn. Затем вышла вторая часть шутера и игра Big Road. После третей части шутера я начал думать, что разрабатывать дальше. Пока я работаю над новой хоррор игрой, потому что я понял, что самые скачиваемые игры - это игры хоррор, с поддержкой Android.",
  },
};


const langSwitcher = document.getElementById("langSwitcher");
langSwitcher.addEventListener("change", changeLanguage);


function changeLanguage() {
  let currentLang = langSwitcher.value;


  for (let key in LanguageDataArr){
    try{
      document.querySelector(".lng-" + key).innerHTML = LanguageDataArr[key][currentLang];
    }
    catch{

    }

  }
}