import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const Final = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image src="http://localhost:3000/menu-mare1.png" style={styles.image} />
      <View style={styles.section}>
        <Text style={styles.title}>Menu</Text>
        <Text style={styles.description}>Choose your favorite dishes</Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  image: {
    width: "100%",
    height: "300px",
    display: "flex",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
  },
  description: {
    fontSize: 14,
  },
});

export default Final;
