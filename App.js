import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';

const s = StyleSheet.create(styles);

const App = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [Edit, setEdit] = useState(false);
  const [IndexVal, setIndexVal] = useState(null);

  const add = () => {
    const obj = {
      todo: text,
      date: new Date().toLocaleString(),
    };
    if (Edit) {
      list[IndexVal].todo = text;

      setEdit(false);
      setIndexVal(null);
    } else {
      list.push(obj);

      // setList([...list, text])
    }
    setList([...list]);
    setText('');
    // console.log(list);
  };

  const del = i => {
    list.splice(i, 1);
    setList([...list]);
  };

  const edit = i => {
        let text = list[i].todo
    setText(text);
    setEdit(true);
    setIndexVal(i);
  };
  const clear = i => {
    list.splice(i, list.length);
    setList([...list]);
  };

  //  d =new Date().toLocaleString()
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={s.headerCont}>
          <Text style={s.header}>To Do</Text>
        </View>
        <ScrollView style={{flex: 1}}>
          {list.map((e, i) => (
            <View style={s.paper} key={i}>
              <View>
                <View>
                  <Text style={{fontWeight: 'bold'}}>{e.date}</Text>
                </View>
                <View style={s.sh}>
                  <Text style={{fontSize: 18, margin: 5, textAlign: 'justify'}}>
                    {e.todo}
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                  <TouchableOpacity onPress={() => del(i)}>
                    <Text
                      style={
                        (s.fs,
                        {
                          margin: 5,
                          padding: 10,
                          borderRadius: 12,
                          color: 'white',
                          backgroundColor: '#42a5f5',
                        })
                      }>
                      Delete
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => edit(i)}>
                    <Text
                      style={
                        (s.fs,
                        {
                          margin: 5,
                          padding: 10,
                          borderRadius: 12,
                          color: 'white',
                          backgroundColor: '#ef233c',
                        })
                      }>
                      Edit
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <TextInput
            // multiline
            value={text}
            onChangeText={e => setText(e)}
            style={[s.input, s.flexCenter]}
            placeholder="Enter Task"
          />
          <TouchableOpacity onPress={add} style={s.btn}>
            <Text style={s.fs}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={e => clear(e)} style={s.btn}>
            <Text>clear</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default App;
