import React from 'react';
import './App.css';

import Moneybox from './assets/components/Moneybox';
import ButtonBuy from './assets/components/buttons/Buy';
import ButtonSell from './assets/components/buttons/Sell';
import Selector from './assets/components/buttons/Selector';
import Human, { HumanPart } from './assets/components/Human';

import arrow from './assets/images/arrow.png'

import hand from './assets/images/parts/hand.png'
import leg from './assets/images/parts/leg.png'
import cucumber from './assets/images/parts/cucumber.png'

import message from './assets/images/message.png'
import cauldron from './assets/images/cauldron.png'

const cfg = {
  price: {
    buy: {
      human: 10,
      hand: 5,
      leg: 7,
      cucumber: 20
    },
    sell: {
      human: 100,
      hand: 3,
      leg: 5,
      cucumber: 15
    }
  },
  base: {
    money: 19,
    hands: 3,
    legs: 4,
    cucumbers: 0
  }
}

const SectionText = ({ text }) => {
  return (
    <p className="Section-text">{text}</p>
  );
}

class App extends React.Component {
  state = {
    money: cfg.base.money,
    hands: cfg.base.hands,
    legs: cfg.base.legs,
    cucumbers: cfg.base.cucumbers,

    partsHandL: false,
    partsHandR: false,
    partsLegL: false,
    partsLegR: false,
    partsCucumber: false,

    human: false,
    sex: 'male',
    skin: 'white'
  };

  addMoney = () => {
    if (this.state.money < 100)
      this.setState({ money: this.state.money + 1 })
    else
      alert("харя не треснет?")
  }

  buySmth = (item, price) => {
    if (this.state.money >= price)
      switch (item) {
        case "hand":
          this.setState({ money: this.state.money - price, hands: this.state.hands + 1 })
          break;
        case "leg":
          this.setState({ money: this.state.money - price, legs: this.state.legs + 1 })
          break;
        case "cucumber":
          this.setState({ money: this.state.money - price, cucumbers: this.state.cucumbers + 1 })
          break;

        case "human":
          if (this.partsCheck())
            this.setState({
              money: this.state.money - price,
              human: true,
              partsHandL: false,
              partsHandR: false,
              partsLegL: false,
              partsLegR: false,
              partsCucumber: false
            })
          break;

        default:
          break;
      }
  }

  sellSmth = (item, price) => {
    switch (item) {
      case "hand":
        if (this.state.hands > 0)
          this.setState({ money: this.state.money + price, hands: this.state.hands - 1 })
        break;
      case "leg":
        if (this.state.legs > 0)
          this.setState({ money: this.state.money + price, legs: this.state.legs - 1 })
        break;
      case "cucumber":
        if (this.state.cucumbers > 0)
          this.setState({ money: this.state.money + price, cucumbers: this.state.cucumbers - 1 })
        break;

      case "human":
        if (this.state.human) {
          this.setState({ money: this.state.money + price, human: false })
          alert("Статья 127.1 УК РФ.\nТорговля людьми наказывается принудительными работами на срок до пяти лет либо лишением свободы на срок до шести лет.")
        }
        break;

      default:
        break;
    }
  }

  partClick = (part) => {
    switch (part) {
      case "handL":
        if (!this.state.partsHandL) {
          if (this.state.hands > 0)
            this.setState({ partsHandL: true, hands: this.state.hands - 1 })
        } else {
          this.setState({ partsHandL: false, hands: this.state.hands + 1 })
        }
        break;
      case "handR":
        if (!this.state.partsHandR) {
          if (this.state.hands > 0)
            this.setState({ partsHandR: true, hands: this.state.hands - 1 })
        } else {
          this.setState({ partsHandR: false, hands: this.state.hands + 1 })
        }
        break;
      case "legL":
        if (!this.state.partsLegL) {
          if (this.state.legs > 0)
            this.setState({ partsLegL: true, legs: this.state.legs - 1 })
        } else {
          this.setState({ partsLegL: false, legs: this.state.legs + 1 })
        }
        break;
      case "legR":
        if (!this.state.partsLegR) {
          if (this.state.legs > 0)
            this.setState({ partsLegR: true, legs: this.state.legs - 1 })
        } else {
          this.setState({ partsLegR: false, legs: this.state.legs + 1 })
        }
        break;
      case "cucumber":
        if (!this.state.partsCucumber) {
          if (this.state.cucumbers > 0)
            this.setState({ partsCucumber: true, cucumbers: this.state.cucumbers - 1 })
        } else {
          this.setState({ partsCucumber: false, cucumbers: this.state.cucumbers + 1 })
        }
        break;

      default:
        break;
    }
  }

  partsCheck = () => {
    const it = this.state;
    if (!it.human && it.money >= cfg.price.buy.human && it.partsHandL && it.partsHandR && it.partsLegL && it.partsLegR && it.partsCucumber)
      return true
    else
      return false
  }

  changeSex = () => {
    if (!this.state.human)
      this.setState({
        sex: (this.state.sex === 'male') ? 'female' : 'male'
      })
  };

  changeSkin = () => {
    if (!this.state.human)
      this.setState({
        skin: (this.state.skin === 'white') ? 'black' : 'white'
      })
  };

  messageOutput = () => {
    if (this.partsCheck()) {
      return "Суп, горячий суп, ешь суп, горячий суп."
    } else {
      let list = [];
      const it = this.state;
      if (!it.partsHandL && !it.partsHandR)
        list.push("ручек")
      else
        if (!it.partsHandL || !it.partsHandR)
          list.push("ручки")

      if (!it.partsLegL && !it.partsLegR)
        list.push("ножек")
      else
        if (!it.partsLegL || !it.partsLegR)
          list.push("ножки")

      if (!it.partsCucumber)
        list.push("огуречика")
      if (it.money < cfg.price.buy.human)
        list.push("денег")

      if (list.length === 0)
        return `Все есть, да вот только место занято.`
      if (list.length === 1)
        return `Не хватает ${list[0]}.`
      if (list.length === 2)
        return `Не хватает ${list[0]} и ${list[1]}.`
      if (list.length === 3)
        return `Не хватает ${list[0]}, ${list[1]} и ${list[2]}.`
      if (list.length === 4)
        return `Не хватает ${list[0]}, ${list[1]}, ${list[2]} и ${list[3]}.`
    }
  }

  render() {
    return (
      <div className="App">
        <header className="Section-container">
          <span className="App-header-text white">«Фабрика пожилых человечков»</span>
        </header>
        <div className="Page">
          <div className="marginTop-64">
            <SectionText text={'Копилка'} />
            <Moneybox qty={this.state.money} add={this.addMoney} />
          </div>
          <div className="marginTop-64">
            <SectionText text={'Рынок ингредиентов'} />
            <div className="Section-container">
              <ButtonBuy
                title={'Купить ручку'}
                value={cfg.price.buy.hand}
                func={() => this.buySmth('hand', cfg.price.buy.hand)}
                active={this.state.money >= cfg.price.buy.hand}
              />
              <ButtonBuy
                title={'Купить ножку'}
                value={cfg.price.buy.leg}
                func={() => this.buySmth('leg', cfg.price.buy.leg)}
                active={this.state.money >= cfg.price.buy.leg}
              />
              <ButtonBuy
                title={'Купить огуречик'}
                value={cfg.price.buy.cucumber}
                func={() => this.buySmth('cucumber', cfg.price.buy.cucumber)}
                active={this.state.money >= cfg.price.buy.cucumber}
              />
            </div>
          </div>
          <div className="marginTop-64">
            <SectionText text={'Ингредиенты в мешке'} />
            <div className="Section-container">
              <ButtonSell
                title={'одну'}
                img={hand}
                qty={this.state.hands}
                value={cfg.price.sell.hand}
                func={() => this.sellSmth('hand', cfg.price.sell.hand)}
                active={this.state.hands > 0}
              />
              <ButtonSell
                title={'одну'}
                img={leg}
                qty={this.state.legs}
                value={cfg.price.sell.leg}
                func={() => this.sellSmth('leg', cfg.price.sell.leg)}
                active={this.state.legs > 0}
              />
              <ButtonSell
                title={'один'}
                img={cucumber}
                qty={this.state.cucumbers}
                value={cfg.price.sell.cucumber}
                func={() => this.sellSmth('cucumber', cfg.price.sell.cucumber)}
                active={this.state.cucumbers > 0}
              />
            </div>
          </div>
          <div className="marginTop-64">
            <SectionText text={'Производство человечка'} />
            <div className="Section-container">
              <div className="marginRight-64 marginBottom-64">
                <div className="Selector-row white marginBottom-64">
                  <div className="Selector-container">
                    <span className="Selector-row">Пол:</span>
                    <span className="Selector-row">Цвет:</span>
                  </div>
                  <div>
                    <div className="Selector-row">
                      <Selector title={'мужчина'} active={this.state.sex === 'male'} func={this.changeSex} />
                      <Selector title={'женщина'} active={this.state.sex === 'female'} func={this.changeSex} />
                    </div>
                    <div className="Selector-row">
                      <Selector title={'белый'} active={this.state.skin === 'white'} func={this.changeSkin} />
                      <Selector title={'черный'} active={this.state.skin === 'black'} func={this.changeSkin} />
                    </div>
                  </div>
                </div>
                <div className="Section-container">
                  <HumanPart
                    part={'hand'}
                    func={() => this.partClick('handL')}
                    status={this.state.partsHandL ? ('added') : ((this.state.hands > 0) ? 'can' : 'cannot')}
                  />
                  <HumanPart
                    part={'hand'}
                    func={() => this.partClick('handR')}
                    status={this.state.partsHandR ? ('added') : ((this.state.hands > 0) ? 'can' : 'cannot')}
                  />
                  <HumanPart
                    part={'leg'}
                    func={() => this.partClick('legL')}
                    status={this.state.partsLegL ? ('added') : ((this.state.legs > 0) ? 'can' : 'cannot')}
                  />
                  <HumanPart
                    part={'leg'}
                    func={() => this.partClick('legR')}
                    status={this.state.partsLegR ? ('added') : ((this.state.legs > 0) ? 'can' : 'cannot')}
                  />
                  <HumanPart
                    part={'cucumber'}
                    func={() => this.partClick('cucumber')}
                    status={this.state.partsCucumber ? ('added') : ((this.state.cucumbers > 0) ? 'can' : 'cannot')}
                  />
                </div>
              </div>
              <img src={arrow} alt="" />
              <div>
                <div className="Message">
                  <img src={message} alt="message" />
                  <div className="Message-text">{this.messageOutput()}</div>
                </div>
                <img className="Cauldron" src={cauldron} alt="cauldron" />
                <ButtonBuy
                  title={'Сделать человечка'}
                  value={cfg.price.buy.human}
                  func={() => this.buySmth('human', cfg.price.buy.human)}
                  active={this.partsCheck()}
                />
              </div>
              <img src={arrow} alt="" />
              <div className="marginLeft-64">
                <Human sex={this.state.sex} skin={this.state.skin} active={this.state.human} func={() => this.sellSmth('human', cfg.price.sell.human)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
