// 2-hbtn_course.js
class HolbertonCourse{
    constructor(name, length, students) {
        this._name = '';
        this._length = 0;
        this._students = [];

        this.name = name;
        this._length = length;
        this.students = students;
    }

    //Getter and setter for name length student
    get name(){
        return this._name;
    }

    set name(value) {
        if (typeof value === 'string') {
            this._name = value;
        }else {
            throw new TypeError('Name must be a string');
        }
    }

    get length(){
        return this._length;
    }

    set length(value) {
        if (typeof value === 'number'){
            this._length = value;
        } else{
            throw new TypeError('Length must be number');
        }
    }

    get students(){
        return this._students;
    }

    set students(value){
        if (typeof Array.isArray(value) && value.every((item) => typeof item === 'string')){
            this._students = value;
        } else{
            throw new TypeError('Student must be an array of strings');
        }
    }
}

export default HolbertonCourse;