import { Button } from "./components/Button";
import { UserProfile } from "./components/UserProfile";
import { Form } from "./components/Form";
import { Product } from "./components/Product";
import { UserCard } from "./components/UserCard";
import { CardWrapper } from "./components/CardWrapper";
import { UserDetails } from "./components/UserDetails";
import { ProductList } from "./components/ProductList";
import { NameList } from "./components/NameList";
import { Alert } from "./components/Alert";
import "./App.css";

function App() {
  return (
    <div>
      <Alert>Your changes are saved</Alert>
      <Alert type="error">Something went wrong</Alert>

      <NameList />
      <ProductList />

      <UserDetails
        name="Bruce Wayne"
        isOnline={true}
        isPremium={true}
        isNewUser={true}
        role="admin"
      />
      <UserDetails
        name="Clark Kent"
        isOnline={true}
        hideOffline={true}
        role={"vip"}
      />

      <CardWrapper title="user Profile">
        <p>Bruce Wayne</p>
        <p>batman@jl.com</p>
        <button>Edit Profile</button>
      </CardWrapper>

      <UserCard
        id="1234"
        name="Jhon Doe"
        age={23}
        city="Delhi"
        email="jhon.doe@email.com"
      />

      <Product
        title="Gaming Laptop"
        price={150999.9}
        inStock={true}
        categories={["Laptop", "Electronics", "Gaming"]}
      />

      <UserProfile />
      <Form />
      <Button />
    </div>
  );
}

export default App;
