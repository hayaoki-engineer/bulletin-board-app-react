import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  SubmitButton,
} from "./index.css.js";

function ThreadForm() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newThread = {
      title: title,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/threads`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newThread),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      navigate("/"); // 成功したらホーム画面に遷移
    } catch (error) {
      console.error("スレッドの作成に失敗しました:", error);
    }
  };

  return (
    <Container>
      <Title>新規スレッド作成</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">タイトル</Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">スレッドを作成する</SubmitButton>
      </Form>
    </Container>
  );
}

export default ThreadForm;
