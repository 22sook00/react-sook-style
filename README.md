# 💞 react-sook-style 🫧

<img width="200px" height="200px" src='https://github.com/22sook00/react-sook-style/assets/80618616/a92d29b1-58ed-420a-b237-c829216029a4' />

## Install

```js
npm i react-sook-style
```

## Quick Start

```js
import { SookButton, SookCard, SookFlex, SookGrid } from "react-sook-style";
```

## API

### Button

| Prop        | Type                                               | Default | Description             |
| ----------- | -------------------------------------------------- | ------- | ----------------------- |
| children    | string,React.ReactNode                             |         | 버튼 텍스트 또는 아이콘 |
| theme       | ThemeProps                                         | primary | 컬러테마설정            |
| size        | "xs","sm" , "md" , "lg"                            | md      | 버튼 사이즈             |
| type        | "button" ,"submit" , "reset";                      | button  | 버튼 타입               |
| onClick     | (e?: React.MouseEvent<HTMLButtonElement>) => void; |         | 클릭이벤트              |
| disabled    | boolean                                            | false   | 버튼 비활성화           |
| customStyle | string                                             |         | 사용자 지정 스타일      |

### Card

| Prop        | Type                   | Default | Description        |
| ----------- | ---------------------- | ------- | ------------------ |
| children    | string,React.ReactNode |         | 카드 컨텐츠        |
| size        | "sm" , "md" , "lg"     | md      | 카드 사이즈        |
| title       | string                 |         | 카드 옵셔널 타이틀 |
| onClick     | () => void;            |         | 클릭이벤트         |
| customStyle | string                 |         | 사용자 지정 스타일 |

### Flex

| Prop        | Type                   | Default    | Description        |
| ----------- | ---------------------- | ---------- | ------------------ |
| children    | string,React.ReactNode |            | 카드 컨텐츠        |
| customStyle | string                 |            | 사용자 지정 스타일 |
| col         | boolean                | true       | column 여부        |
| row         | boolean                |            | row 여부           |
| gap         | number                 | 12         | 간격               |
| wrap        | string                 |            | 줄 표시 속성       |
| item        | string                 | flex-start | 세로정렬           |
| justify     | string                 | flex-start | 좌우정렬           |

### Grid

| Prop        | Type                   | Default    | Description         |
| ----------- | ---------------------- | ---------- | ------------------- |
| children    | string,React.ReactNode |            | 카드 컨텐츠         |
| customStyle | string                 |            | 사용자 지정 스타일  |
| col         | string                 | 1fr        | 나눌 열 프레임 칼럼 |
| row         | string                 | 1fr        | 나눌 행 프레임 칼럼 |
| gap         | number                 | 12         | 간격                |
| item        | string                 | flex-start | 세로정렬            |
| justify     | string                 | flex-start | 좌우정렬            |

### Stack

- React
- Typescript
- Style-componet
