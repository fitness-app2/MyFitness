import * as React from "react";
import {StyleSheet,  View, Text, TouchableOpacity, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import axios from 'axios';
import { useDebounce } from 'use-debounce';
import link from '../link';


function Search  ({ route })  {
  const navigation = useNavigation();
  const { user } = route.params;
  console.log(user.id)
  const [foreign, setForeign]=useState({})
  const [inputValue, setInputValue] = useState("");
  const [searchTerm] = useDebounce(inputValue, 500);
  const [originalUsers, setOriginalUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchHis, setSearchHis] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  console.log(searchResults,'hhh')

 useEffect(() => {
    axios.get(`${link}/userss`)
      .then(res => {
        setOriginalUsers(res.data);
        setSearchResults(res.data);  
      })
      .catch(err => console.error(err));
     }, []);

  const handlePostHis=()=>{
    axios.post(`${link}/search/addsearch`,{
      search_history_id:inputValue,
      user_id:`${user.id}`
    }).then(res => {
      setSearchHis(res.data)
    })
    .catch(err => console.error(err));
  }
    
useEffect(()=>{
axios.get(`${link}/search/get/${user.id}`)
.then(res => {
  setSearchHis(res.data)
    console.log("syee")
})
.catch(err => console.error(err,"lee")

); 

}, []);


  useEffect(() => {
    const filteredUsers = originalUsers.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredUsers);
  }, [searchTerm]);

  const handledelet = (id) => {
    axios.delete(`${link}/search/delete/${id}`)
      .then((res) => {
        setSearchHis(res.data);
        console.log(res.data)
        console.log("fasakh ")
      })
      .catch((err) => console.log(err,"lee mtfasakhsh"));
  }

  return (
    <View style={styles.search}>
      <View style={styles.barsStatusBarIphoneL}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.tag1Border]} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/ca.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
         source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellularconnection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <Text style={styles.popular}>Popular</Text>
      <View style={[styles.searchBar, styles.filtersFlexBox]}>
        <TextInput style={styles.searchForPeople} 
        
        value={inputValue}
        onChangeText={text => setInputValue(text)}>
          Search for people, posts, tags...
        </TextInput>
        <Image
          style={styles.iconSearch}
          contentFit="cover"
          source={require("../assets/iconsearch.png")}
        />
      </View>
      
      <View style={[styles.filters, styles.filtersFlexBox]}>
        <TouchableOpacity>
        <View style={[styles.tag6, styles.tagFlexBox]}>
          <Text style={[styles.all, styles.allTypo]}
           onPress={() => navigation.navigate("Acceuil")}>All</Text>
        </View>
        </TouchableOpacity>
       
        {searchResults?.length > 0 ? (
  searchResults.map((item, index) => (
    <Card key={item?.id || index} style={styles.container1}>
      <Card.Title
        title={item?.username || "Unknown"}
        subtitle="fitness"
        left={(props) => <Avatar.Image source={{uri: item?.profilepic}} size={50} />}
        right={(props) => <IconButton {...props} icon="eye" onPress={() => {navigation.navigate("OneProfile", {  foreign:searchResults[0] })}} />}
      />
    </Card>
  ))
) : null}
        <View style={[styles.tag1, styles.tagFlexBox]}>
        <TouchableOpacity>
          <Text style={[styles.profiles, styles.allTypo]}>Profiles</Text>
          </TouchableOpacity>
        </View>
      
        <View style={[styles.tag1, styles.tagFlexBox]}>
          <TouchableOpacity>
          <Text style={[styles.profiles, styles.allTypo]}>Photos</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.tag1, styles.tagFlexBox]}>
        <TouchableOpacity>
          <Text style={[styles.profiles, styles.allTypo]}>Videos</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.tag1, styles.tagFlexBox]}>
        <TouchableOpacity>
          <Text style={[styles.profiles, styles.allTypo]}>Text</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.tag1, styles.tagFlexBox]}>
        <TouchableOpacity>
          <Text style={[styles.profiles, styles.allTypo]}>Links</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.tag1, styles.tagFlexBox]}>
        <TouchableOpacity>
          <Text style={[styles.tags, styles.allTypo]}>Tags</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.navigationSearch, styles.navBgLayout]}>
        <View style={[styles.navBg, styles.navBgLayout]} />
        <View style={styles.mobilehomeIndicatorLight}>
          <View style={[styles.homeIndicator, styles.capacityBg]} />
        </View>
        <View style={[styles.feedParent, styles.feedFlexBox]}>
          <View style={[styles.feed, styles.feedSpaceBlock]}>
            <Image
              style={styles.iconFeed}
              contentFit="cover"
              source={require("../assets/iconfeed.png")}
            />
          </View>
          <View style={[styles.search1, styles.alertFlexBox]}>
            <Image
              style={styles.iconSearch}
              contentFit="cover"
              source={require("../assets/iconsearch1.png")}
            />
          </View>
          <LinearGradient
            style={[styles.create, styles.alertFlexBox]}
            locations={[0, 0.55]}
            colors={["#f62e8e", "#ac1af0"]}
          >
            <Image
              style={styles.iconFeed}
              contentFit="cover"
              source={require("../assets/iconplus.png")}
            />
          </LinearGradient>
          <View style={[styles.alert, styles.alertFlexBox]}>
            <Image
              style={styles.iconFeed}
              contentFit="cover"
              source={require("../assets/iconalert.png")}
            />
          </View>
          <View style={[styles.alert, styles.alertFlexBox]}>
            <Image
              style={styles.iconFeed}
              contentFit="cover"
              source={require("../assets/iconprofile.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tag1Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  capacityBg: {
    backgroundColor: "#fff",
    position: "absolute",
  },
  filtersFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    left: 24,
    position: "absolute",
  },
  tagFlexBox: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  allTypo: {
    fontSize: 12,
    color: "#ecebed",
    textAlign: "left",
  },
  navBgLayout: {
    height: 88,
    width: 375,
    left: 0,
    position: "absolute",
  },
  feedFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  feedSpaceBlock: {
    opacity: 0.5,
    padding: 8,
  },
  alertFlexBox: {
    marginLeft: 32,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  border: {
    height: "100%",
    width: "90.43%",
    top: "0%",
    right: "9.57%",
    bottom: "0%",
    borderRadius: 3,
    borderColor: "#fff",
    opacity: 0.35,
    left: "0%",
    borderStyle: "solid",
    position: "absolute",
  },
  capIcon: {
    height: "35.29%",
    width: "5.46%",
    top: "32.35%",
    right: "0%",
    bottom: "32.35%",
    left: "94.54%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.4,
    position: "absolute",
    overflow: "hidden",
  },
  capacity: {
    height: "64.71%",
    width: "73.99%",
    top: "17.65%",
    right: "17.79%",
    bottom: "17.65%",
    left: "8.22%",
    borderRadius: 1,
  },
  battery: {
    height: "25.76%",
    width: "6.49%",
    top: "39.39%",
    right: "3.82%",
    bottom: "34.85%",
    left: "89.69%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -4.5,
    top: "50%",
    fontSize: 15,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    textAlign: "center",
    color: "#fff",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "15.91%",
    right: "80%",
    bottom: "36.36%",
    left: "5.6%",
    position: "absolute",
  },
  barsStatusBarIphoneL: {
    right: 0,
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  popular: {
    top: 136,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: "HK Grotesk",
    fontWeight: "700",
    left: 24,
    color: "#fff",
    position: "absolute",
  },
  searchForPeople: {
    fontSize: 14,
    color: "#ecebed",
    fontWeight: "500",
    textAlign: "left",
    fontFamily: "HK Grotesk",
  },
  iconSearch: {
    width: 20,
    height: 20,
  },
  searchBar: {
    top: 68,
    backgroundColor: "#323436",
    width: 327,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 32,
    flexDirection: "row",
  },
  all: {
    fontFamily: "HK Grotesk",
    fontWeight: "700",
    fontSize: 12,
  },
  tag6: {
    borderRadius: 16,
    backgroundColor: "#2e8af6",
  },
  profiles: {
    fontWeight: "500",
    fontSize: 12,
    fontFamily: "HK Grotesk",
  },
  tag1: {
    borderRadius: 18,
    borderColor: "#727477",
    marginLeft: 12,
    borderWidth: 1,
    borderStyle: "solid",
  },
  tags: {
    fontFamily: "DMSans-Regular",
  },
  filters: {
    top: 172,
    width: 350,
  },
  navBg: {
    backgroundColor: "#000",
    top: 0,
    height: 88,
    overflow: "hidden",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    width: 134,
    height: 5,
  },
  mobilehomeIndicatorLight: {
    bottom: 0,
    height: 24,
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconFeed: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  feed: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  search1: {
    padding: 10,
  },
  create: {
    backgroundColor: "transparent",
    padding: 8,
    marginLeft: 32,
    borderRadius: 32,
  },
  alert: {
    opacity: 0.5,
    padding: 8,
  },
  feedParent: {
    top: 16,
    left: 24,
    justifyContent: "center",
    position: "absolute",
  },
  navigationSearch: {
    top: 724,
  },
  search: {
    backgroundColor: "#181a1c",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});


export default Search