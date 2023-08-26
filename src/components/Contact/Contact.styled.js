import styled from "styled-components"


export const ContactItemStyle = styled.li`


    display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;

h3 {
  margin: 0;
  width: 200px;
}

/* Додаткові стилі для параграфу, якщо потрібно */
p {

  margin: 0;
  font-size: 14px;
  color: #555;
  width: 100px;
}

button {
     background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  
  transition: background-color 0.3s ease;
}

`