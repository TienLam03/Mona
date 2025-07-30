<template>
    <div class="flex flex-col gap-6 p-4 mx-auto max-w-7xl lg:flex-row lg:gap-12 lg:p-8 xl:p-12">
        <!-- Contact Info - Left Side -->
        <div class="w-full lg:flex-1 lg:max-w-md">
            <!-- Main Title -->
            <div class="mb-6 xl:mb-8">
                <h2 class="mb-2 text-2xl font-bold text-gray-800 xl:text-4xl xl:mb-3">Thông tin liên hệ</h2>
                <p class="text-base font-medium text-gray-600 xl:text-lg">Phòng khám Mona Media</p>
            </div>

            <!-- Contact Information Sections -->
            <div class="space-y-6 xl:space-y-8">
                <!-- Contact Info Items -->
                <div v-for="info in contactInfo" :key="info.id" class="space-y-2 xl:space-y-3">
                    <h3 class="text-lg font-bold text-gray-800 xl:text-xl">{{ info.title }}</h3>
                    <div class="text-sm text-gray-600 xl:text-base">
                        <template v-if="info.type === 'address'">
                            <a :href="info.link" class="hover:text-[#2AD2C1] transition-colors">
                                {{ info.content }}
                            </a>
                        </template>
                        <template v-else-if="info.type === 'phone'">
                            <a :href="info.link" class="hover:text-[#2AD2C1] transition-colors">
                                {{ info.content }}
                            </a>
                        </template>
                        <template v-else-if="info.type === 'hours'">
                            <div class="space-y-1">
                                <div v-for="hour in info.content" :key="hour">{{ hour }}</div>
                            </div>
                        </template>
                    </div>
                </div>

                <!-- Social Media Section -->
                <div class="space-y-2 xl:space-y-3">
                    <h3 class="text-lg font-bold text-gray-800 xl:text-xl">Mạng xã hội:</h3>
                    <div class="flex space-x-3 xl:space-x-4">
                        <a 
                            v-for="social in socialMedia" 
                            :key="social.id"
                            :href="social.url" 
                            :class="social.bgColor"
                            class="flex items-center justify-center w-10 h-10 text-white transition-all duration-300 transform rounded-full xl:w-12 xl:h-12 hover:scale-110"
                            :style="{ backgroundColor: social.hoverColor + ' !important' }"
                            @mouseover="$event.target.style.backgroundColor = social.hoverColor"
                            @mouseout="$event.target.style.backgroundColor = ''"
                        >
                            <i :class="social.iconClass + ' text-sm xl:text-lg'"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contact Form - Right Side -->
        <div class="w-full lg:flex-1">
            <div class="p-6 bg-gray-50 rounded-2xl lg:p-8 xl:p-10">
                <!-- Header Section -->
                <div class="mb-6 text-center xl:mb-8">
                    <p class="mb-2 text-sm font-medium tracking-wider text-gray-500 uppercase">
                        GET CONSULTANCY
                    </p>
                    <h3 class="text-xl font-bold text-[#2AD2C1] xl:text-2xl 2xl:text-3xl">
                        Liên hệ đặt lịch
                    </h3>
                </div>

                <!-- Contact Form -->
                <form @submit.prevent="submitForm" class="space-y-6">
                    <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
                        <!-- Form Fields -->
                        <div 
                            v-for="field in formFields" 
                            :key="field.name"
                            class="relative"
                            :class="field.fullWidth ? 'xl:col-span-2' : ''"
                        >
                            <div 
                                v-if="field.type !== 'date'"
                                class="absolute text-gray-400 transform -translate-y-1/2 right-4 top-1/2"
                            >
                                <i :class="field.icon + ' text-base'"></i>
                            </div>
                            <input
                                v-model="formData[field.name]"
                                :type="field.type"
                                :placeholder="field.placeholder"
                                :required="field.required"
                                :class="field.type === 'date' ? 
                                    'w-full pl-4 pr-4 py-4 bg-white border-none rounded-[25px] focus:outline-none placeholder-gray-400 text-base' :
                                    'w-full pl-4 pr-12 py-4 bg-white border-none rounded-[25px] focus:outline-none placeholder-gray-400 text-base'"
                            />
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <div class="pt-4 text-center xl:pt-6">
                        <button
                            type="submit"
                            :disabled="isSubmitting"
                            class="bg-[#2AD2C1] text-white font-semibold
                                   px-10 py-3 text-base rounded-full transition-all duration-300 
                                   xl:px-12 xl:py-4 xl:text-lg
                                   hover:bg-[#1DB4A7] hover:shadow-lg hover:-translate-y-1
                                   disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                                   focus:outline-none focus:ring-4 focus:ring-[#2AD2C1]/30
                                   min-w-[180px] xl:min-w-[200px]"
                            :class="isSubmitting ? 'cursor-wait' : 'cursor-pointer'"
                        >
                            <span v-if="!isSubmitting">Đặt khám ngay</span>
                            <span v-else class="flex items-center justify-center gap-2">
                                <svg class="w-4 h-4 xl:w-5 xl:h-5 animate-spin" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Đang gửi...
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // Contact Information Data
            contactInfo: [
                {
                    id: 1,
                    title: 'Địa chỉ',
                    type: 'address',
                    content: '1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM',
                    link: '#'
                },
                {
                    id: 2,
                    title: 'Số điện thoại',
                    type: 'phone',
                    content: '(+84) 0313-728-397',
                    link: 'tel:0313728397'
                },
                {
                    id: 3,
                    title: 'Thời gian làm việc',
                    type: 'hours',
                    content: ['Thứ 2 - chủ nhật', 'Từ 7:30 - 20:30']
                }
            ],

            // Social Media Data
            socialMedia: [
                {
                    id: 1,
                    name: 'Facebook',
                    url: '#',
                    iconClass: 'fab fa-facebook-f',
                    bgColor: 'bg-blue-600',
                    hoverColor: '#1d4ed8'
                },
                {
                    id: 2,
                    name: 'Twitter',
                    url: '#',
                    iconClass: 'fab fa-twitter',
                    bgColor: 'bg-blue-400',
                    hoverColor: '#3b82f6'
                },
                {
                    id: 3,
                    name: 'Instagram',
                    url: '#',
                    iconClass: 'fab fa-instagram',
                    bgColor: 'bg-pink-600',
                    hoverColor: '#be185d'
                },
                {
                    id: 4,
                    name: 'Pinterest',
                    url: '#',
                    iconClass: 'fab fa-pinterest-p',
                    bgColor: 'bg-red-600',
                    hoverColor: '#dc2626'
                }
            ],

            // Form Fields Configuration
            formFields: [
                {
                    name: 'name',
                    type: 'text',
                    placeholder: 'Họ tên*',
                    icon: 'fas fa-user',
                    required: true,
                    fullWidth: false
                },
                {
                    name: 'email',
                    type: 'email',
                    placeholder: 'Email*',
                    icon: 'fas fa-envelope',
                    required: true,
                    fullWidth: false
                },
                {
                    name: 'phone',
                    type: 'tel',
                    placeholder: 'Số điện thoại*',
                    icon: 'fas fa-phone',
                    required: true,
                    fullWidth: false
                },
                {
                    name: 'subject',
                    type: 'text',
                    placeholder: 'Chủ đề*',
                    icon: 'fas fa-map-marker-alt',
                    required: true,
                    fullWidth: false
                },
                {
                    name: 'appointmentDate',
                    type: 'date',
                    placeholder: '',
                    icon: 'fas fa-calendar-alt',
                    required: true,
                    fullWidth: true
                }
            ],

            // Form data for appointment booking
            formData: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                appointmentDate: ''
            },

            isSubmitting: false
        };
    },

    computed: {
        // Computed property để validate form
        isFormValid() {
            return this.formFields.every(field => {
                if (!field.required) return true;
                const value = this.formData[field.name];
                if (!value || !value.toString().trim()) return false;
                
                // Special validation for email
                if (field.type === 'email') {
                    return this.isValidEmail(value);
                }
                
                // Special validation for date
                if (field.type === 'date') {
                    const selectedDate = new Date(value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return selectedDate >= today;
                }
                
                return true;
            });
        },

        // Get required field names for validation messages
        requiredFields() {
            return this.formFields.filter(field => field.required);
        }
    },

    methods: {
        async submitForm() {
            // Validate form
            if (!this.validateForm()) {
                return;
            }

            this.isSubmitting = true;

            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Success message
                this.showNotification('Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.', 'success');
                
                // Reset form
                this.resetForm();
                
            } catch (error) {
                console.error('Error submitting form:', error);
                this.showNotification('Có lỗi xảy ra, vui lòng thử lại sau.', 'error');
            } finally {
                this.isSubmitting = false;
            }
        },

        validateForm() {
            // Sử dụng computed property để kiểm tra
            if (!this.isFormValid) {
                // Tìm field đầu tiên bị lỗi và hiển thị thông báo
                const invalidField = this.requiredFields.find(field => {
                    const value = this.formData[field.name];
                    if (!value || !value.toString().trim()) {
                        this.showNotification(`Vui lòng nhập ${field.placeholder.replace('*', '')}`, 'error');
                        return true;
                    }
                    
                    if (field.type === 'email' && !this.isValidEmail(value)) {
                        this.showNotification('Email không hợp lệ', 'error');
                        return true;
                    }
                    
                    if (field.type === 'date') {
                        const selectedDate = new Date(value);
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        if (selectedDate < today) {
                            this.showNotification('Ngày hẹn phải từ hôm nay trở đi', 'error');
                            return true;
                        }
                    }
                    
                    return false;
                });
                
                return false;
            }
            
            return true;
        },

        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },

        resetForm() {
            // Reset form data dựa trên cấu hình formFields
            this.formFields.forEach(field => {
                this.formData[field.name] = '';
            });
        },

        showNotification(message, type = 'info') {
            // Simple notification - you can replace with a proper notification library
            alert(message);
        }
    },

    mounted() {
        // Set minimum date to today for appointment date input
        const today = new Date().toISOString().split('T')[0];
        const dateInput = document.querySelector('input[type="date"]');
        if (dateInput) {
            dateInput.setAttribute('min', today);
        }
    }
};
</script>

<style></style>
