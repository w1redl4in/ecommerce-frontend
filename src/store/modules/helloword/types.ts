export type HelloWorldState = IHelloWord;

export type IHelloWord = {
  message: string;
};

export const HelloWorldActionTypes = {
  SEND_HELLO_WORLD: '@@helloworld/SEND_HELLO_WORLD',
};
