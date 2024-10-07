import {Tilt} from "react-tilt";

const Card = ({ role }) => (
  <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
      <div className="role-card">
        <img
          src={role.icon}
        />

        <span>
          {role.name}
        </span>
      </div>
  </Tilt>
);

export default Card;