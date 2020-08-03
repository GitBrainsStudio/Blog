# Логирование в C#

        
    //класс Logger, который записывает события либо ошибки в соответствующие файлы, в папке Logs

    public class Logger
    {
        private ReaderWriterLockSlim lock_ = new ReaderWriterLockSlim();

        private string logDirectory { get; set; }

        public Logger()
        {
            logDirectory = AppDomain.CurrentDomain.BaseDirectory + @"/_logs/" + DateTime.Now.ToString("dd-MM-yy HH-mm-ss") + @"/";

            if (!Directory.Exists(logDirectory))
                Directory.CreateDirectory(logDirectory);
        }

        public void Event(string _message) 
        {
            lock_.EnterWriteLock();
            try
            {
                using (StreamWriter writetext = new StreamWriter(logDirectory + "events.txt", append: true))
                {
                    writetext.WriteLine(_message);
                }
            }
            finally
            {
                lock_.ExitWriteLock();
            }
           
        }

        public void Error(string _message)
        {
            lock_.EnterWriteLock();
            try
            {
                using (StreamWriter writetext = new StreamWriter("errors.txt", append: true))
                {
                    writetext.WriteLine(_message);
                }
            }
            finally
            {
                lock_.ExitWriteLock();
            }
     
        }
    }