let userRole = null;
//potrzebuje cos, zeby robic zasiegi a tego nie trzeba tu czyscic a jak dam local storage to trzeba czyscic

const mockedLoginService = () => {
  const usersArray = [
    { login: "user1", password: "pass1", rola: "customer" },
    { login: "user2", password: "pass2", rola: "cook" },
  ];
  const authenticateUser = (login, password) => {
    const foundUser = usersArray.find(
      (user) => user.login === login && user.password === password
    );
    //find działa tak, ze zwroci mi element jesli przekazana dla niego funkcja zwroci TRUE -
    //czyli tu zawsze ebdzie jakies warunek logiczny
    if (foundUser) {
      return { role: foundUser.rola };
    } else {
      return { errorMsg: "Incorrect password or login" };
    }
  };

  return { authenticateUser };
  //taki zapis to skrot ze klucz i wartosc ma te sama wartosc
  //funkcja to firstclasscitizien czyli funcja moze przyjmoac inna funcje i zwraca funkcje czyli moze byc tarktowana jako parametr
  //CLOSER - DOMKNIECIE:
};

//przyjmie parametr
const handleSubmit = (event) => {
  event.preventDefault(); //niektóre eventy sa oblsuzone w przegladarce w domyslny sposób,
  //gdy chcemy ominac te zachowania ta metoda wyciszy to domyslne zachowanie przegladarki i event nie ma oblusgo dopiki jej sie samemu nie napisze
  //tutaj: wysylanie  (zdarzenie submit ma domyslna obsluge na poziomie taga hmtl form (button submit ma w sobie logike dla eventu onsubmit
  //tylkko trzeba ustalic sciezke na ktora sie wysyla - wysle zapytanie metoda POST pod ten adres + zmieni sie adres w przgladarce URL)
  // jak nie mam tego preventDefault to mam w adresie: ?loginName=user2&password=pass2#cook-view to mi sie pojawia po ? te query paramiters klucz wartosc oddzielone tym &
  // zastosowania: doklikania na linki, formualrze,

  const loginName = event.target.elements.loginName.value;
  const password = event.target.elements.password.value;

  //target czyli tam gdzie jest obslugiwane a curenttarget to skad wyszlo- zrodlo
  const serviceResponse = mockedLoginService().authenticateUser(
    loginName,
    password
  );

  userRole = serviceResponse.role ?? null;

  if (serviceResponse.role === "cook") {
    leftMenu.style.display = "block";
    rightContent.style.display = "block";
    loginForm.style.display = "none";
    location.hash = "cook-view";
  } else if (serviceResponse.role === "customer") {
    productList.style.display = "flex";
    loginForm.style.display = "none";
    location.hash = "customer-view";
  } else {
    loginFailedMsg.innerText = serviceResponse.errorMsg ?? "jepjep"; //bo to jako default wartosc jakby nie bylo tej waidmosci, gdy null lub undefined
    //paragraf sobie dorobic zeby wrzucac ten tekst
    console.log("dupa");
  }
};

//te url zmiany: uzywac tego HASH od location HASH (lokalizacja na stornie wiec nei strzela pod adres w necie tylko bedzie przechodzilo po tym dokumencie )
// hash change event

window.addEventListener(
  "hashchange",
  (event) => {
    console.log(event);
    const path = location.hash;

    if (path.includes("cook") && userRole === "cook") {
      console.log("poprawna rola");
    } else if (path.includes("customer") && userRole === "customer") {
      console.log("poprawna rola");
    } else {
      alert("niepoprawna rola");
      const oldHash = event.oldURL.slice(event.oldURL.indexOf("#") + 1) ?? "";
      location.hash = oldHash;
      console.log(oldHash);
    }
  },
  false
);
//tu musze jeszcze zrobic validacje czy gdy zmieni sie hash czy rola pozwala na wejscie na te podstorne czyli znowu zamokowac taka mape: rola + hashe, gdy sie nie zgodza to trzebaby cofnac na poprzedni adres
//albo nie hash tylko objekt na window: history - i metody push state/replay state
