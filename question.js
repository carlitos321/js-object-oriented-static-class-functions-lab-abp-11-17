'use strict';

class Question {

  constructor(content){
    this.content = content
    this.save()
  }

  save() {
    this.constructor._All.push(this)
  }

  static Find(id) {
    return this.All()[id-1]
  }

  static All(){
    return this._All;
  }
}

Question._All = []

find(2);
