import { Images } from "../../assets/images"
import Widget from "./Widget"

const AllWidgets = ({ user }) => {

const Icon = ({ img, alt}) => (
    <img src={img} alt={alt} className="w-7 h-7"/>
  )
  return (
    <>
      <Widget
        icon={<Icon img={Images.deposit} alt="Total deposit" />}
        title={"Deposit"}
        subtitle={`$${user.balance.deposit}`}
      />
      <Widget
        icon={<Icon img={Images.profit} alt="Profit" />}
        title={"Profit"}
        subtitle={`$${user.balance.earning}`}
      />
      <Widget
        icon={<Icon img={Images.bonus} alt="Bonus" />}
        title={"Bonus"}
        subtitle={`$${user.balance.bonus}`}
      />
      <Widget
        icon={<Icon img={Images.refBonus} alt="Ref Bonus" />}
        title={"Ref Bonus"}
        subtitle={`$${user.balance.refBonus ?? 0.00}`}
      />
      <Widget
        icon={<Icon img={Images.balance} alt="Balance" />}
        title={"Balance"}
        subtitle={`$${user.balance.balance}`}
      />
       <Widget
        icon={<Icon img={Images.balance} alt="Balance" />}
        title={"New Balance"}
        subtitle={`$${user.balance.total}`}
      />
    </>
  );
}

export default AllWidgets
