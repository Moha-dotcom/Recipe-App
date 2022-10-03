export class Ingredient{


  constructor(public _nameInout : string, public _amountInout : string) {
      this._nameInout = _nameInout;
      this._amountInout = _amountInout
  }


  get nameInout(): string {
    return this._nameInout;
  }

  get amountInout(): string {
    return this._amountInout;
  }
}

