function pascalcase(text)
{
    let separatedText = text.split(/(?=[A-Z])/)
    console.log(separatedText.join(', '))


}
pascalcase('SplitMeIfYouCanHaHaYouCantOrYouCan')