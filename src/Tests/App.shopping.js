import React from "react";
const sampleItems = [
  {
    name: "TV",
    id: 876234812,
  },
];

class ShoppingList extends React.Component {
  constructor(props) {
    const { items } = props;
    super(props);
    this.state = { items };
  }

  removeItem = (id) => {
    this.setState((state) => {
      const newItems = state.items.filter((item) => item.id !== id);
      return { items: newItems };
    });
  };

  render() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item.id}>
            {" "}
            {item.name}
            <button
              id="removeBtn"
              onClick={() => this.removeItem(item.id)}
              type="button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default () => <ShoppingList items={sampleItems} />;
