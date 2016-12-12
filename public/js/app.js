var Home = React.createClass({
  render: function () {
    return(
      <div className="container">
        <Header/>
        <Section />
        <Footer />
      </div>
    );
  }
});

var Header = React.createClass({
  render: function () {
    return(
      <div className="header"></div>
    );
  }
});

var Section = React.createClass({
  getRandomNumber: function () {
    return Math.floor(Math.floor((Math.random() * 99) + 0));
  },
  getNumber: function functionName() {
    var that = this;
    $('.listNumber li').each(function (idx, elm) {
      var number = that.getRandomNumber();
        $(elm).text(number < 10 ? '0' + number : number);
    });
  },
  render: function () {
    return(
      <div className="section">
        <h3>
            <p className="text-title"> Dãy số may mắn của bạn là ? </p>
            <ListNumber/>
            <button type="submit" className="btn-red" onClick={this.getNumber}> Cho tôi số </button>
        </h3>
      </div>
    );
  }
})

var ListNumber = React.createClass({
  getInitialState: function () {
    return {
      listNumber: [
        {id:'num1'},
        {id:'num2'},
        {id:'num3'},
        {id:'num4'},
        {id:'num5'},
        {id:'num6'}
      ]
    }
  },
  render: function () {
    return(
      <ul className="listNumber">
        {
          this.state.listNumber.map(function (item) {
            return(
              <ItemNumber key={item.id} attrId={item.id}/>
            );
          })
        }
      </ul>
    );
  }
});

var ItemNumber = React.createClass({
  render: function () {
    return(
      <li id={this.props.attrId}>- -</li>
    );
  }
});

var Footer = React.createClass({
  render: function () {
    return(
      <div className="footer"></div>
    );
  }
})

ReactDOM.render(
  <Home />,
  document.getElementById('app')
);
