const [choice, setChoice] = useState(null);

const onFilterContent = () => {
  setChoice(
    <>
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: THEME.GRAY_COLOR,
          position: "absolute",
          bottom: -6,
        }}
      ></View>
    </>
  );
};

const data = useContext(DataContext);

return (
          
          <AppLink onPress={onFilterContent}>
            <AppTextSemiBold>Весь контент</AppTextSemiBold>
            {choice ? (
              choice
            ) : (
              <View
                style={{
                  height: 2,
                  width: "100%",
                  backgroundColor: THEME.GRAY_COLOR,
                  position: "absolute",
                  bottom: -6,
                }}
              ></View>
            )}
          </AppLink>
        </>

        <AppLink onPress={onFilterContent}>
          <AppTextSemiBold>Эксклюзив</AppTextSemiBold>
          {choice}
        </AppLink>
        <AppLink onPress={onFilterContent}>
          <AppTextSemiBold>Рекомендации</AppTextSemiBold>
          {choice}
        </AppLink>
      
);
