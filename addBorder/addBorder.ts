function addBorder(picture: string[]): string[] {
    picture.unshift('*'.repeat(picture[0].length));
}

// console.log(addBorder(["abc", "ded"]));