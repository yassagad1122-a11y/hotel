import { motion } from "framer-motion";

function MyComponent({children}) {
  return (
    <div > 
      
      <motion.div
        // 1. الحالة الابتدائية: العنصر نازل لتحت شوية ومخفي
        initial={{ opacity: 0, y: 40 }} 
        
        // 2. الحالة أول ما يظهر في الشاشة: يطلع لمكانه الطبيعي ويظهر
        whileInView={{ opacity: 1, y: 0 }} 
        
        // 3. التحكم في وقت ونوع الحركة (نعومة الأنميشن)
        transition={{ duration: 0.6, ease: "easeOut" }}
        
        // 4. اختياري: عشان الأنميشن يحصل مرة واحدة بس وميتكررش كل ما تطلع وتنزل

      >
        {children}
      </motion.div>

    </div>
  );
}

export default MyComponent;