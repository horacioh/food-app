import * as React from "react";

export const DataContext = React.createContext({});

class DataProvider extends React.Component {
  state = {
    e5d9d9f5: {
      label: "🍦 ice cream",
      isDelicious: true,
      isHealthy: false
    },
    a9ba692b: {
      label: "🍕 pizza",
      isDelicious: true,
      isHealthy: false
    },
    ze128a47: {
      label: "🥗 spinach",
      isDelicious: false,
      isHealthy: true
    }
  };

  handleDataChange = ({ id, key }) => {
    // console.log(id, key);
    this.setState((prevState) => {
      // console.log(prevState[id][key]);
      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          [key]: !prevState[id][key]
        }
      };
    });
  };

  render() {
    const { children } = this.props;
    const value = {
      data: this.state,
      setData: this.handleDataChange
    };
    return (
      <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
  }
}

export default DataProvider;
