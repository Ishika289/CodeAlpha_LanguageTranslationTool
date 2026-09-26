const textInput = document.getElementById("text");
const targetLanguage = document.getElementById("language");
const translateButton = document.getElementById("translateBtn");
const translationResult = document.getElementById("result");

translateButton.addEventListener("click", async function () {

    const text = textInput.value.trim();
    const target = targetLanguage.value;

    if (text === "") {
        translationResult.textContent = "Please enter some text.";
        return;
    }
    translationResult.textContent = "Translating..."

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${target}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        translationResult.textContent =
            data.responseData.translatedText;

    } catch (error) {
        console.error(error);
        translationResult.textContent =
            "Translation failed. Please check your internet connection.";
    }
});        