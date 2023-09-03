import React, { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import { useAppDispatch } from 'redux/store';
import thunks from 'redux/user/thunks';


function useLibraryPermission() {
  const [isGranted, setIsGranted] = useState<any>();
  const [source, setSource] = useState<any>();
  const pick = () => {
    launchImageLibrary({ quality: 0.5, mediaType: 'photo' }).then(res =>
      setSource(res),
    );
  };
  const pickImage = () => {
    // alert('aaa')
    launchCamera({
      mediaType: 'photo'
    }).then(
      (res) => {
        setSource(res)
      }
    )
  }

  const uploadFile = async (setFieldValue: any, name: any) => {
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setFieldValue(name.replace(/\s/g, ''), {
        uri: res[0]?.uri,
        type: res[0]?.type,
        name: res[0]?.name,
      })
    } catch (err) {
      setFieldValue(name.replace(/\s/g, ''), '')
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled');
      } else {
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }

  const UploadFile = async (id: number, dispatch: any) => {
    try {
      const res: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      // alert(JSON.stringify(res))
      const formdata = new FormData();
      formdata.append('_method', 'PATCH')
      formdata.append('document', {
        uri: res[0]?.uri,
        type: res[0]?.type,
        name: `${new Date(new Date() - Math.random() * (1e+12))}`,
      })
      dispatch(thunks.updateMilestone({
        id,
        body: formdata
      }))
      // setFieldValue(name.replace(/\s/g, ''), res[0])
    } catch (err) {
      // setFieldValue(name.replace(/\s/g, ''), '')
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled');
      } else {
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  }
  return {
    isGranted,
    source,
    pick,
    setSource,
    pickImage,
    uploadFile,
    UploadFile
  };
}

export default useLibraryPermission;
