import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dt>{user.name}</dt>
      <dt>趣味</dt>
      <dt>{user.hobbies?.join(" / ")}</dt>
    </dl>
  );
};
