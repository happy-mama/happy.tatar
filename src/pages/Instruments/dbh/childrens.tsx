import { EmbedText, Text } from "../../../widgets/WindowParts/styled";
import BlockFile from "../../../widgets/BlockFile";

const methods = {
  init: (
    <>
      <Text>
        Builds your template, and when it ready, connects to a database.
      </Text>
    </>
  ),
};

const params = {
  init: (
    <>
      <Text>(DB, options, GEN) {}</Text>
    </>
  ),
};

const text = {
  methods: {},
  params: {
    init: <></>,
  },
  classes: (
    <>
      <Text>
        DBH has only one main class. Use <EmbedText>init</EmbedText> method to
        start it.
      </Text>
    </>
  ),
};

const summary = {
  methods: {
    init: (
      <>
        {methods.init}
        {params.init}
      </>
    ),
  },
};

const blocks = {
  methods: {
    init: (
      <>
        <BlockFile
          name="init"
          surname="method"
          children={summary.methods.init}
        />
        <BlockFile name="stop" surname="method" children={<></>} />
        <BlockFile name="log" surname="method" children={<></>} />
        <BlockFile name="warn" surname="method" children={<></>} />
        <BlockFile name="error" surname="method" children={<></>} />
      </>
    ),
  },
  classes: {},
};

export const dbhChildrens = {
  methods: {
    init: <></>,
  },
  classes: (
    <>
      {text.classes}
      {blocks.methods.init}
    </>
  ),
};
