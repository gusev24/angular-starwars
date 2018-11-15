export class User {
    constructor(
        public id: number,
        public name: string,
        public gender: string,
        public birthdate: Date,
        public height?: string,
        public mass?: string,
        public eye_color?: string,
        public hair_color?: string,
        public skin_color?: string
    ) { }
}
