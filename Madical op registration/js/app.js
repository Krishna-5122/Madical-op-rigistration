angular.module('appointmentApp', [])
.controller('MainController', ['$scope', function($scope) {
    // Health quotes array
    $scope.quotes = [
        {
            text: "Health is a state of complete harmony of the body, mind and spirit.",
            author: "B.K.S. Iyengar"
        },
        {
            text: "The greatest wealth is health.",
            author: "Virgil"
        },
        {
            text: "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.",
            author: "Buddha"
        },
        {
            text: "Health is not valued till sickness comes.",
            author: "Thomas Fuller"
        },
        {
            text: "The first wealth is health.",
            author: "Ralph Waldo Emerson"
        },
        {
            text: "A healthy outside starts from the inside.",
            author: "Robert Urich"
        },
        {
            text: "Wellness is the complete integration of body, mind, and spirit - the realization that everything we do, think, feel, and believe has an effect on our state of well-being.",
            author: "Greg Anderson"
        }
    ];
    
    // Set current quote
    $scope.currentQuote = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];
    
    // Rotate quotes every 10 seconds
    setInterval(function() {
        $scope.currentQuote = $scope.quotes[Math.floor(Math.random() * $scope.quotes.length)];
        $scope.$apply();
    }, 10000);
    
    // Initialize form models
    $scope.appointment = {
        hospital: '',
        specialization: '',
        date: '',
        time: '',
        patientName: '',
        patientAge: '',
        patientContact: '',
        patientEmail: '',
        patientNotes: ''
    };
    
    $scope.registration = {
        firstName: '',
        lastName: '',
        phone: '',
        gender: '',
        dob: '',
        address: '',
        username: '',
        password: '',
        confirmPassword: ''
    };
    
    $scope.login = {
        username: '',
        password: ''
    };
    
    $scope.contact = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };
    
    // Form submission functions
    $scope.submitAppointment = function() {
        // In a real app, this would send data to a backend
        console.log('Appointment booked:', $scope.appointment);
        $scope.appointmentSuccess = true;
        
        // Reset form
        $scope.appointment = {
            hospital: '',
            specialization: '',
            date: '',
            time: '',
            patientName: '',
            patientAge: '',
            patientContact: '',
            patientEmail: '',
            patientNotes: ''
        };
    };

    $scope.submitRegistration = function() {
        // In a real app, this would send data to a backend
        console.log('Registration submitted:', $scope.registration);
        $scope.registrationSuccess = true;
        
        // Reset form
        $scope.registration = {
            firstName: '',
            lastName: '',
            phone: '',
            gender: '',
            dob: '',
            address: '',
            username: '',
            password: '',
            confirmPassword: ''
        };
    };
    
    $scope.submitLogin = function() {
        // In a real app, this would authenticate with a backend
        console.log('Login attempted:', $scope.login);
        alert('Login functionality would connect to a backend in a real application.');
    };
    
    $scope.submitContact = function() {
        // In a real app, this would send data to a backend
        console.log('Contact form submitted:', $scope.contact);
        $scope.contactSuccess = true;
        
        // Reset form
        $scope.contact = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
    };
}]);
