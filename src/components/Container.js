import React, { Component } from 'react';
import DateHeader from './DateHeader';
import Week from './Week';
import Days from './Days';
import style from './Container.module.css';

class Container extends Component {
  constructor() {
    super();

    this.date = new Date();

    this.state = {
      month: this.date.getMonth(),
      year: this.date.getFullYear(),
    };
  }

  goToToday = () =>
    this.setState({
      month: this.date.getMonth(),
      year: this.date.getFullYear(),
    });

  displayDays = () => {
    const { month, year } = this.state;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let days = [];
    let day = 1;

    const isToday = () =>
      day === this.date.getDate() &&
      month === this.date.getMonth() &&
      year === this.date.getFullYear();

    for (let i = 0; i < 42; i++) {
      if (i < firstDay.getDay() || i >= lastDay.getDate() + firstDay.getDay()) {
        days.push(<span key={i}>-</span>);
      } else if (isToday()) {
        days.push(
          <span key={i} className={style.today}>
            {day}
          </span>
        );
        day++;
      } else {
        days.push(<span key={i}>{day}</span>);
        day++;
      }
    }

    return days;
  };

  nextMonth = () => {
    const { month, year } = this.state;

    this.setState({
      month: month === 11 ? 0 : month + 1,
      year: month === 11 ? year + 1 : year,
    });
  };

  previousMonth = () => {
    const { month, year } = this.state;

    this.setState({
      month: month === 0 ? 11 : month - 1,
      year: month === 0 ? year - 1 : year,
    });
  };

  render() {
    return (
      <div className={style.container}>
        <DateHeader
          month={this.state.month}
          year={this.state.year}
          previousMonth={this.previousMonth}
          nextMonth={this.nextMonth}
          goToToday={this.goToToday}
        />
        <Week />
        <Days displayDays={this.displayDays} />
      </div>
    );
  }
}

export default Container;
