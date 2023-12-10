import { Images } from "../../assets/images"
import Widget from "./Widget"

const AllWidgets = ({ user }) => {
  const total = parseFloat(user?.balance) + parseFloat(user?.earning) + parseFloat(user?.bonus) + parseFloat(user?.ref_bonus)
;
const Icon = ({ img, alt}) => (
    <img src={img} alt={alt} className="w-7 h-7"/>
  )
  return (
    <>
      <Widget
        icon={<Icon img={Images.deposit} alt="Total deposit" />}
        title={"Deposit"}
        subtitle={`$${parseFloat(user?.balance) ?? 0.00}`}
      />
      <Widget
        icon={<Icon img={Images.profit} alt="Profit" />}
        title={"Profit"}
        subtitle={`$${parseFloat(user?.earning) ?? 0.00}`}
      />
      <Widget
        icon={<Icon img={Images.bonus} alt="Bonus" />}
        title={"Bonus"}
        subtitle={`$${parseFloat(user?.bonus) ?? 0.00}`}
      />
      <Widget
        icon={<Icon img={Images.refBonus} alt="Ref Bonus" />}
        title={"Ref Bonus"}
        subtitle={`$${parseFloat(user?.ref_bonus) ?? 0.00}`}
      />
      <Widget
        icon={<Icon img={Images.balance} alt="Balance" />}
        title={"Balance"}
        subtitle={`$${total ?? 0.00}`}
      />
    </>
  );
}
export default AllWidgets
